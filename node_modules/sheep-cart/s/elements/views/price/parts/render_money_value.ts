
import {html} from "@benev/slate"
import {MoneyValue} from "./types.js"

export function render_money_value({symbol, currency, big, small}: MoneyValue) {
	return html`
		${symbol
			? html`<span class=symbol>${symbol}</span>`
			: undefined}
		<span class=big>${big}</span>
		<span class=stack>
			${small
				? html`<span class=small>${small}</span>`
				: undefined}
			<span class=currency>${currency}</span>
		</span>
	`
}

