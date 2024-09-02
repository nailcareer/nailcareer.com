
import {gql} from "../../tools/gql.js"
import {ImageFormat} from "./units/image.js"
import {GraphRequest} from "./types/graph_request.js"
import {GqlProduct, product} from "./units/product.js"
import {ProductFilters} from "./types/product_filters.js"
import {GqlPaginated, paginated} from "./units/paginated.js"

export function make_request_for_products_in_collection({
		after,
		page_size,
		image_format,
		collection_id,
		filters,
	}: {
		after: string | undefined
		page_size: number
		collection_id: string
		image_format: ImageFormat
		filters: ProductFilters
	}): GraphRequest {
	return {

		query: gql`
			query FetchProductsInCollection(
					$collection_id: ID!,
					$first: Int!,
					$after: String,
					$filters: [ProductFilter!],
				) {
				collection(id: $collection_id) {
					products(first: $first, after: $after, filters: $filters) {
						${paginated(product({image_format}))}
					}
				}
			}
		`,

		variables: {
			collection_id,
			first: page_size,
			after,
			filters,
		},
	}
}

export type GqlProductsInCollection = {
	collection: {
		products: GqlPaginated<GqlProduct>
	}
}

