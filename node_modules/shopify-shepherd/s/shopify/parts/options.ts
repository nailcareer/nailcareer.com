
import {Remote} from "../remote/remote.js"
import {ImageFormat} from "../graphql/units/image.js"
import {CheckoutLineItem} from "../graphql/checkout.js"
import {ProductFilters} from "../graphql/types/product_filters.js"
import {ProductSortKeys} from "../graphql/types/product_sort_keys.js"
import {ProductQuerySpec} from "../product_queries/convert_product_query_spec_to_string.js"

export namespace Options {

	export type Shopify = {
		remote: Remote
	}

	export type Product = {
		id: string
		image_format?: ImageFormat
	}

	export type Products = {
		page_size?: number
		query?: ProductQuerySpec
		image_format?: ImageFormat
		sort?: ProductSortKeys
		reverse?: boolean
	}

	export type Collections = {
		page_size?: number
		image_format?: ImageFormat
	}

	export type Tags = {
		page_size?: number
	}

	export type ProductsInCollection = {
		collection_id: string
		page_size?: number
		image_format?: ImageFormat
		filters?: ProductFilters
	}

	export type ProductRecommendations = {
		product_id: string
		image_format?: ImageFormat
		intent?: "RELATED" | "COMPLEMENTARY"
	}

	export type SpecificProducts = {
		ids: string[]
		image_format?: ImageFormat
	}

	export type Checkout = {
		line_items: CheckoutLineItem[]
	}
}

