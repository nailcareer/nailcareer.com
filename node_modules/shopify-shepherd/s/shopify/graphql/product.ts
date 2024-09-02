
import {gql} from "../../tools/gql.js"
import {product} from "./units/product.js"
import {ImageFormat} from "./units/image.js"
import {GraphRequest} from "./types/graph_request.js"

export function make_request_for_single_product({id, image_format}: {
		id: string
		image_format: ImageFormat
	}): GraphRequest {

	return {
		query: gql`
			query FetchProduct($id: ID!) {
				product(id: $id) {
					${product({image_format})}
				}
			}
		`,
		variables: {
			id,
		},
	}
}

