
import {Op} from "@benev/slate"
import {GqlCollection, GqlProduct} from "shopify-shepherd"

export namespace Situation {
	export namespace Base {
		export type ProductList = {
			products: GqlProduct[]
			load_more: (() => void) | undefined
			load_more_op: Op.For<void>
		}
	}

	export type CollectionList = {
		type: "collection_list"
		collections: GqlCollection[]
	}

	export type ProductsInCollection = {
		type: "products_in_collection"
		collection_id: string
	} & Base.ProductList

	export type AllProducts = {
		type: "all_products"
	} & Base.ProductList

	export type SearchResults = {
		type: "search_results"
	} & Base.ProductList

	export type SingleProduct = {
		type: "single_product"
		product: GqlProduct
	}

	export type NotFound = {
		type: "not_found",
		message?: string
	}

	export type Whatever = (
		| CollectionList
		| ProductsInCollection
		| AllProducts
		| SearchResults
		| SingleProduct
		| NotFound
	)

	export namespace Group {
		export type ProductList = (
			| ProductsInCollection
			| AllProducts
			| SearchResults
		)
	}
}

