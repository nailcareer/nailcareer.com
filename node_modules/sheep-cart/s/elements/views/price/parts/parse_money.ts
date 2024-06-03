
import {GqlPrice} from "shopify-shepherd"
import {MoneyValue, VariantPricing} from "./types.js"
import {get_symbol_for_currency_code} from "./get_symbol_for_currency_code.js"

export function parse_money({price, compareAtPrice}: VariantPricing) {
	return {
		value: parse_money_value(price),
		comparison: compareAtPrice
			? parse_money_value(compareAtPrice)
			: undefined,
	}
}

function parse_money_value(price: GqlPrice): MoneyValue {
	const {amount, currencyCode: currency} = price
	const number = parseFloat(amount)
	const symbol = get_symbol_for_currency_code(currency)
	const [big, smallraw] = number
		.toFixed(2)
		.split(".")
		.map(part => parseInt(part).toLocaleString())
	const small = (smallraw ?? "0").padStart(2, "0")
	return {number, symbol, currency, big, small}
}

