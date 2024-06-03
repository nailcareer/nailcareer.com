
import {gql} from "../../tools/gql.js"
import {GraphRequest} from "./types/graph_request.js"
import {GqlPaginated, paginated} from "./units/paginated.js"
import {GqlImage, ImageFormat, image} from "./units/image.js"

export function make_request_for_collections({
		after,
		image_format,
		page_size,
	}: {
		after: string | undefined
		page_size: number
		image_format: ImageFormat
	}): GraphRequest {
	return {

		query: gql`
			query FetchCollections($first: Int!, $after: String) {
				collections(first: $first, after: $after) {
					${paginated(gql`

						description
						descriptionHtml
						handle
						id
						title
						updatedAt
						onlineStoreUrl

						image {
							${image(image_format)}
						}

					`)}
				}
			}
		`,

		variables: {
			after,
			first: page_size,
		},
	}
}

export type GqlCollection = {
	description: string
	descriptionHtml: string
	handle: string
	id: string
	title: string
	updatedAt: string
	onlineStoreUrl?: string

	image?: GqlImage
}

export type GqlCollections = {
	collections: GqlPaginated<GqlCollection>
}

