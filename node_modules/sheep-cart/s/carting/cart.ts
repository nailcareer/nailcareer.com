
import {Flat, flat, Op} from "@benev/slate"
import {GqlProduct, Shopify} from "shopify-shepherd"

import {CartStore} from "./parts/cart_store.js"
import {CartItem, CartState, CartUnit, ProductCache} from "./parts/types.js"

export class Cart {
	#shopify: Shopify
	#store: CartStore

	#state: CartState
	readonly state: CartState

	constructor(shopify: Shopify, store: CartStore) {
		this.#shopify = shopify
		this.#store = store
		this.#state = flat.state({
			items: [],
			products: [],
		})
		this.state = Flat.readonly(this.#state)
	}

	#flatstate = <X extends {}>(x: X) => flat.state<X>(x)

	save() {
		const {items} = this.#state
		this.#store.save({items})
	}

	async load() {
		const pack = this.#store.load()
		const promise = this.#fetch_products(pack.items)
		this.#state.items = pack.items.map(this.#flatstate)
		await promise
	}

	#get_item(variant_id: string) {
		return this.#state.items.find(i => i.variant_id === variant_id)
	}

	#get_product(product_id: string) {
		return this.#state.products.find(i => i.product_id === product_id)
	}

	get units() {
		return this.#state.items
			.map(item => ({item, product: this.#get_product(item.product_id)}))
			.filter(data => !!data.product && Op.is.ready(data.product.op))
			.map(data => {
				const product = Op.payload(data.product!.op)
				const variant = product?.variants.edges
					.map(e => e.node)
					.find(v => v.id === data.item.variant_id)
				return (!!product && !!variant && variant.availableForSale)
					? {
						product,
						variant,
						product_id: data.item.product_id,
						variant_id: data.item.variant_id,
						quantity: data.item.quantity,
					} as CartUnit
					: undefined
			})
			.filter(u => !!u) as CartUnit[]
	}

	add(variant_id: string, product: GqlProduct) {

		// add item
		this.#state.items = [
			this.#flatstate({
				product_id: product.id,
				variant_id,
				quantity: 1,
			}),
			...this.#state.items.filter(i => i.variant_id !== variant_id),
		]

		// add product in ready state
		this.#state.products = [
			this.#flatstate({
				product_id: product.id,
				op: Op.ready(product),
			}),
			...this.#state.products.filter(p => p.product_id !== product.id),
		]

		this.save()
	}

	remove(variant_id: string) {
		this.#state.items = this.#state.items
			.filter(i => i.variant_id !== variant_id)

		this.save()
	}

	set_quantity(variant_id: string, quantity: number) {
		const item = this.#get_item(variant_id)!
		item.quantity = quantity

		this.save()
	}

	clear() {
		this.#state.items = []
		this.save()
	}

	async #fetch_products(items: CartItem[]) {
		const new_product_ids = items
			.filter(i => !this.#get_product(i.product_id))
			.map(i => i.product_id)

		const new_caches: ProductCache[] = new_product_ids
			.map(product_id => ({product_id, op: Op.loading<GqlProduct>()}))
			.map(this.#flatstate)

		this.#state.products = [
			...this.#state.products,
			...new_caches
		]

		if (new_product_ids.length > 0) {
			try {
				const products = (await this
					.#shopify
					.specific_products({ids: new_product_ids})
				) ?? []

				for (const cache of new_caches) {
					const product = products.find(p => p?.id === cache.product_id)
					cache.op = product
						? Op.ready(product)
						: Op.error("error retrieving product")
				}
			}
			catch (error) {
				console.error("a cart product could not be loaded,", error)
				this.clear()
			}
		}
	}
}

