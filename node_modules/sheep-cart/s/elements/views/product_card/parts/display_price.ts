
import {TemplateResult} from "@benev/slate"
import {GqlPrice, GqlProduct, GqlVariant} from "shopify-shepherd"

export function display_price({
		product,
		single_price,
		multiple_prices,
	}: {
		product: GqlProduct
		single_price: (variant: GqlVariant) => TemplateResult
		multiple_prices: (variant: GqlVariant) => TemplateResult
	}) {

	const more_than_one_variant = product.variants.edges.length > 1

	const all_the_same_price = product.variants.edges
		.every(p => p.node.price.amount === product.variants.edges[0].node.price.amount)

	function numerical(price: GqlPrice) {
		return parseFloat(price.amount)
	}

	const variants = product.variants.edges.map(e => e.node)
	let cheapest_variant = variants[0]

	for (const variant of variants) {
		if (numerical(variant.price) < numerical(cheapest_variant.price))
			cheapest_variant = variant
	}

	return (more_than_one_variant && !all_the_same_price)
		? multiple_prices(cheapest_variant)
		: single_price(cheapest_variant)
}

