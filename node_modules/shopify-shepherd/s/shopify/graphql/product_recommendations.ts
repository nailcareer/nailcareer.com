
import {gql} from "../../tools/gql.js"
import {ImageFormat} from "./units/image.js"
import {GraphRequest} from "./types/graph_request.js"
import {GqlProduct, product} from "./units/product.js"

export function make_request_for_product_recommendations({
		intent,
		product_id,
		image_format,
	}: {
		product_id: string
		image_format: ImageFormat
		intent: "RELATED" | "COMPLEMENTARY" | undefined
	}): GraphRequest {
	return {

		query: gql`
			query FetchProductRecommendations($product_id: ID!, $intent: ProductRecommendationIntent) {
				productRecommendations(productId: $product_id, intent: $intent) {
					${product({image_format})}
				}
			}
		`,

		variables: {
			intent,
			product_id,
		},
	}
}

export type GqlProductRecommendations = {
	productRecommendations: GqlProduct[]
}

