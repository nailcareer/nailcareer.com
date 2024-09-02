
import {CartUnit} from "../../../carting/parts/types.js"
import {VariantPricing} from "../../views/price/parts/types.js"

export function sum_subtotal([firstunit, ...units]: CartUnit[]): VariantPricing {
	const currencyCode = firstunit.variant.price.currencyCode
	const first = get_values(firstunit)

	const totals = {
		price: first.price,
		comparison: first.comparison ?? first.price,
	}

	for (const unit of units) {
		const {price, comparison} = get_values(unit)
		totals.price += price
		totals.comparison += comparison ?? price
	}

	return {
		price: {
			currencyCode,
			amount: totals.price.toString(),
		},
		compareAtPrice: (totals.price !== totals.comparison)
			? {
				currencyCode,
				amount: totals.comparison.toString(),
			}
			: undefined,
	}
}

function get_values({variant, quantity}: CartUnit) {
	return {
		price: parseFloat(variant.price.amount) * quantity,
		comparison: variant.compareAtPrice && parseFloat(variant.compareAtPrice.amount) * quantity,
	}
}

