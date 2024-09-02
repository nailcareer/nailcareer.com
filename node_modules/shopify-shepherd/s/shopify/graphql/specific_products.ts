
import {gql} from "../../tools/gql.js"
import {product} from "./units/product.js"
import {ImageFormat} from "./units/image.js"
import {GraphRequest} from "./types/graph_request.js"

export function make_request_for_specific_products({ids, image_format}: {
		ids: string[]
		image_format: ImageFormat
	}): GraphRequest {

	return {
		query: gql`
			query FetchProducts($ids: [ID!]!) {
				products: nodes(ids: $ids) {
					... on Product {
						${product({image_format})}
					}
				}
			}
		`,
		variables: {
			ids,
		},
	}
}

