
import {GqlProduct} from "shopify-shepherd";

export function number_of_variants(product: GqlProduct) {
	return product.variants.edges.length
}

