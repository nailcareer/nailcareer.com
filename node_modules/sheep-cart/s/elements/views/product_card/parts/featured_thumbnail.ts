
import {GqlProduct} from "shopify-shepherd"

export function featured_thumbnail(product: GqlProduct) {

	const imageEdge = product.images.edges
		.find(n => n.node.id === product.featuredImage?.id)

	return imageEdge?.node.url_tiny
}

