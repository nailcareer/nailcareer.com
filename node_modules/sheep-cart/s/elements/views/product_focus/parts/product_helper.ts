
import {GqlCollection, GqlImage, GqlProduct} from "shopify-shepherd"

export class ProductHelper {
	constructor(public readonly product: GqlProduct) {}

	get images() {
		return this.product.images.edges.map(e => e.node)
	}

	get variants() {
		return this.product.variants.edges.map(e => e.node)
	}

	get first_variant() {
		return this.variants[0]
	}

	get featured_image() {
		const {product} = this
		let image: GqlImage | undefined

		const product_has_any_image_at_all = (
			product.featuredImage &&
			product.images.edges.length
		)

		if (product_has_any_image_at_all) {
			image = product.images.edges
				.map(e => e.node)
				.find(node => node.id === product.featuredImage?.id)
		}

		return image
	}

	get_variant(variant_id: string) {
		return this.variants.find(v => v.id === variant_id)
	}

	get_variant_image(variant_id: string) {
		const variant = this.get_variant(variant_id)
		if (variant && variant.image) {
			return this.images.find(i => i.id === variant!.image!.id)
		}
	}

	cross_reference_collections(all_collections: GqlCollection[]) {
		const collections: GqlCollection[] = []
		const product_collection_records = this.product.collections.edges
			.map(e => e.node)

		for (const c of product_collection_records) {
			const found = all_collections.find(ac => ac.id === c.id)
			if (found)
				collections.push(found)
		}

		return collections
	}
}

