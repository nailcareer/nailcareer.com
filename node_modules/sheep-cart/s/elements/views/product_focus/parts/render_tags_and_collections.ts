
import {html} from "@benev/slate"
import {GqlCollection} from "shopify-shepherd"
import {ProductHelper} from "./product_helper.js"

export function render_tags_and_collections(
		productHelper: ProductHelper,
		all_collections: GqlCollection[],
	) {

	const tags = [...productHelper.product.tags]

	const collections = productHelper
		.cross_reference_collections(all_collections)
		.map(collection => collection.title)

	return html`

		${collections.map(collection => html`
			<li data-collection>${collection}</li>
		`)}

		${tags.map(tag => html`
			<li data-tag>${tag}</li>
		`)}
	`
}

