
import {ImageFormat} from "../graphql/units/image.js"

export const defaults = {

	// 250 is shopify's maximum page size
	page_size: 250,

	api_version: "2023-04",

	image_format: "WEBP" as ImageFormat
}

