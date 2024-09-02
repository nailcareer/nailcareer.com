
import {gql} from "../../../tools/gql.js"

export type ImageFormat = "JPG" | "PNG" | "WEBP"

export function image(format: ImageFormat) {

	function url_with_transform(x: number, y: number) {
		return gql`
			url(
				transform: {
					maxWidth: ${x}
					maxHeight: ${y}
					preferredContentType: ${format}
				}
			)
		`
	}

	return gql`
		id
		altText
		url_original: url
		url_tiny: ${url_with_transform(200, 200)}
		url_small: ${url_with_transform(500, 500)}
		url_medium: ${url_with_transform(1000, 1000)}
		url_large: ${url_with_transform(2000, 2000)}
	`
}

export type GqlImage = {
	id: string
	altText: string
	url_original: string
	url_tiny: string
	url_small: string
	url_medium: string
	url_large: string
}

