
import {html} from "@benev/slate"
import {MoneyValue} from "./types.js"

export function render_sale_tag(price: MoneyValue, comparison: MoneyValue) {
	const fraction = (comparison.number - price.number) / comparison.number
	const percent = Math.round(fraction * 100)

	return html`
		<span class=sale part=sale data-gpart=sale>
			${percent}% off
		</span>
	`
}

