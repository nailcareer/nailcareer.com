
import {Op} from "@benev/slate"
import {GqlProduct, GqlVariant} from "shopify-shepherd"

export type CartState = {
	items: CartItem[]
	products: ProductCache[]
}

export type CartItem = {
	product_id: string
	variant_id: string
	quantity: number
}

export type ProductCache = {
	product_id: string
	op: Op.For<GqlProduct>
}

export type CartUnit = {
	product_id: string
	variant_id: string
	quantity: number
	product: GqlProduct
	variant: GqlVariant
}

export namespace CartStoreData {
	export type V1 = {
		version: number
		pack: {items: CartItem[]}
	}
}

