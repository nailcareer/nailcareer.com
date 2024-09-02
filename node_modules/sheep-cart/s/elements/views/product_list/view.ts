
import {html} from "@benev/slate"

import {styles} from "./styles.css.js"
import {slate} from "../../slate.js"
import {Options} from "./utils/options.js"
import {render_op} from "../../render_op.js"
import {ProductCard} from "../product_card/view.js"

export const ProductList = slate.shadow_view({
		styles,
		name: "product-list",
	}, _use =>

	({situation: {products, load_more_op, load_more}}: Options) => (
		((products.length > 0)
			? html`
				<div class=grid>
					${products.map(product =>
						ProductCard([product], {attrs: {part: "card", gpart: "card"}})
					)}
				</div>

				<footer>
					${render_op(load_more_op, () => load_more
						? html`<button @click=${load_more}>load more</button>`
						: undefined)}
				</footer>
			`
			: html`
				<p>No products found</p>
			`
		)
	)
)

