
import {TemplateResult, html} from "@benev/slate"

import {slate} from "../slate.js"
import {render_op} from "../render_op.js"
import {style as styles} from "./style.css.js"
import {ProductList} from "../views/product_list/view.js"
import {ProductFocus} from "../views/product_focus/view.js"
import {bg_img} from "../views/collection_list/utils/bg_img.js"
import {CollectionList} from "../views/collection_list/view.js"
import {process_comma_list} from "./utils/process_comma_list.js"
import {sort_collections} from "../views/collection_list/utils/sort_collections.js"

export const SheepCatalog = slate.shadow_component({styles}, use => {
	const {state, router} = use.context

	const attrs = use.attrs({
		"prioritized-collections": String,
		"hidden-collections": String,
	})

	function get_option_attributes() {
		return {
			hidden: process_comma_list(attrs["hidden-collections"]),
			prioritized: process_comma_list(attrs["prioritized-collections"]),
		}
	}

	function render_collections_tabs(prioritized: string[], hidden: string[]) {
		const active_collection_id = state.route.zone === "collection"
			? state.route.id
			: undefined

		if (!active_collection_id)
			return undefined

		const collections = sort_collections(state.collections, prioritized, hidden)

		return html`
			<div part=collection-tab-list>
				${collections.map(collection => html`
					<a
						part=collection-tab
						href="${router.routes.collection(collection).url}"
						?data-active-collection=${collection.id === active_collection_id}>
						<span class=bgimg style="${bg_img(collection)}"></span>
						<span class=text>${collection.title}</span>
					</a>
				`)}
			</div>
		`
	}

	const {hidden, prioritized} = get_option_attributes()

	return html`
		<div>
			${render_collections_tabs(prioritized, hidden)}
			${render_op(state.situation_op, situation => {
				switch (situation?.type) {

					case "collection_list":
						return CollectionList(
							[{
								hidden,
								prioritized,
								collections: situation.collections,
							}],
							{attrs: {part: "collection-list"}},
						) as TemplateResult

					case "products_in_collection": {
						return ProductList(
							[{situation}],
							{attrs: {part: "product-list"}},
						) as TemplateResult
					}

					case "all_products":
						return ProductList(
							[{situation}],
							{attrs: {part: "product-list"}},
						) as TemplateResult

					case "search_results":
						return ProductList(
							[{situation}],
							{attrs: {part: "product-list"}},
						) as TemplateResult

					case "single_product":
						return ProductFocus(
							[situation.product],
							{attrs: {part: "product-focus"}},
						) as TemplateResult

					case "not_found":
						return html`
							${situation.message
								? html`<h1>${situation.message}</h1>`
								: html`<h1>Not found</h1>`}
							<p>
								<a part=a href="${router.routes.home().url}">
									back
								</a>
							</p>
						`

					default:
						return undefined
				}
			})}
		</div>
	`
})

