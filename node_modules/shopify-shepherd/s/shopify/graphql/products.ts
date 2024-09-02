
import {gql} from "../../tools/gql.js"
import {ImageFormat} from "./units/image.js"
import {GraphRequest} from "./types/graph_request.js"
import {GqlProduct, product} from "./units/product.js"
import {GqlPaginated, paginated} from "./units/paginated.js"
import {ProductSortKeys} from "./types/product_sort_keys.js"

export function make_request_for_products({
		query,
		after,
		image_format,
		page_size,
		sort,
		reverse,
	}: {
		query: string | undefined
		after: string | undefined
		page_size: number
		image_format: ImageFormat
		sort: ProductSortKeys | undefined
		reverse: boolean | undefined
	}): GraphRequest {

	return {
		query: gql`
			query FetchProducts(
				$first: Int!,
				$after: String,
				$sort: ProductSortKeys,
				$reverse: Boolean,
				$query: String,
				) {
				products(
					first: $first,
					after: $after,
					sortKey: $sort,
					reverse: $reverse,
					query: $query,
					) {
					${paginated(product({image_format}))}
				}
			}
		`,

		variables: {
			query,
			after,
			first: page_size,
			sort,
			reverse,
		},
	}
}

export type GqlProducts = {
	products: GqlPaginated<GqlProduct>
}

