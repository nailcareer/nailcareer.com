
import {GqlCollection} from "shopify-shepherd"

export function bg_img(collection: GqlCollection) {
	return collection.image
		? `background-image: url("${collection.image.url_small}");`
		: ""
}

