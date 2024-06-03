
export function get_symbol_for_currency_code(currencyCode: string) {
	switch (currencyCode.toUpperCase()) {
		case "USD":
		case "CAD":
		case "AUD":
		case "NZD":
		case "HKD":
		case "SGD":
			return "$"

		case "EUR":
			return "€"

		case "GBP":
			return "£"

		case "JPY":
		case "CNY":
			return "¥"

		case "INR":
			return "₹"

		case "BRL":
			return "R$"

		case "ZAR":
			return "R"

		case "RUB":
			return "₽"

		case "KRW":
			return "₩"

		case "TRY":
			return "₺"

		default:
			return undefined
	}
}

