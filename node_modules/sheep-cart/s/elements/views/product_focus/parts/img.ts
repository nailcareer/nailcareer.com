
import {GqlImage} from "shopify-shepherd"

import {Img} from "./types.js"
import {placeholder_img} from "./placeholder_img.js"

function prep(fun: (i: GqlImage) => string) {
	return (image?: GqlImage): Img => image
		? {src: fun(image), alt: image.altText}
		: placeholder_img
}

export const img = {
	tiny: prep(i => i.url_tiny),
	small: prep(i => i.url_small),
	medium: prep(i => i.url_medium),
	large: prep(i => i.url_large),
	original: prep(i => i.url_original),
}

