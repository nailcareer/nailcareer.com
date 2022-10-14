
import {LitElement, css, html} from "lit"
import {mixinStyles} from "../framework/component.js"
import {ShopperProduct} from "shopper/x/components/shopper-product.js"

/*

- product titles are static generated based on product-catalog.yaml
- but then we load from shopify the product details, which includes the real products
- currently, the product is only reading the statically-generated product title,
	which often differs from the shopify title that is actually displayed.
- to resolve this, we need to add a feature to `shopper` which writes the loaded product title
	as an attribute on each `<shopper-product>`.

*/

@mixinStyles(css`

input {
	font-size: 1.2rem;
	padding: 1em;
	font-family: inherit;
	background: #fff2;
	border: 3px solid #fff4;
	border-radius: 0.2em;
	color: inherit;
}

`)
export class NceSearch extends LitElement {

	#products = Array.from(
		document.querySelectorAll<ShopperProduct>("shopper-product")
	)

	#search() {
		const terms
			= this
			.shadowRoot
			.querySelector("input")
			.value
			.split(/\s/)
			.map(term => term.trim())

		const matching
			= this
			.#products
			.filter(product => titleMatchesTerms(
				decodeURIComponent(product.getAttribute("data-title")),
				terms,
			))

		for (const product of this.#products)
			product.style.display
				= matching.includes(product)
					? "block"
					: "none"
	}

	render() {
		return html`
			<input
				type=text
				@change=${this.#search}
				@input=${this.#search}
				/>
		`
	}
}

function titleMatchesTerms(title: string, terms: string[]) {
	const lowercase = title.toLowerCase()
	const failed = terms.some(term => lowercase.indexOf(term) === -1)
	return !failed
}
