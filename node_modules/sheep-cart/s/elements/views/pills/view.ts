
import {html} from "@benev/slate"
import {GqlProduct} from "shopify-shepherd"

import {slate} from "../../slate.js"
import {styles} from "./styles.css.js"
import {ProductHelper} from "../product_focus/parts/product_helper.js"

export const Pills = slate.shadow_view({
		name: "pills",
		styles,
	}, use => (product: GqlProduct) => {

	const productHelper = new ProductHelper(product)

	const collections = productHelper
		.cross_reference_collections(use.context.state.collections)

	return html`
		<ol part=list>

			${collections.map(collection => html`
				<li part=collection>${collection.title}</li>
			`)}

			${product.tags.map(tag => html`
				<li part=tag>${tag}</li>
			`)}
		</ol>
	`
})

