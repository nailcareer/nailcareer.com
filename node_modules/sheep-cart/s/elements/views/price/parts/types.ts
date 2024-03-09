
import {GqlPrice} from "shopify-shepherd"

export type VariantPricing = {
	price: GqlPrice
	compareAtPrice?: GqlPrice
}

export type MoneyValue = {
	number: number
	symbol: string | undefined
	currency: string
	big: string
	small: string
}

export type Money = {
	value: MoneyValue
	comparison: MoneyValue | undefined
}

