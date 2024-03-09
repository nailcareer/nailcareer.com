
import {html} from "@benev/slate"

import {slate} from "../slate.js"
import {style as styles} from "./style.css.js"

export const SheepNav = slate.shadow_component({styles}, use => {
	const {route} = use.context.state
	const {routes} = use.context.router

	function get_areas() {
		return {

			collections: {
				url: routes.collections().url,
				marked: (
					route.zone === "collections" ||
					(route.zone === "home" && route.area === "collections")
				)
			},

			products: {
				url: routes.products().url,
				marked: (
					route.zone === "products" ||
					(route.zone === "home" && route.area === "products")
				)
			},
		}
	}

	const areas = get_areas()

	return html`
		<a
			href="${areas.collections.url}"
			?data-marked="${areas.collections.marked}">
			<slot name=collections>
				collections
			</slot>
		</a>

		<a
			href="${areas.products.url}"
			?data-marked="${areas.products.marked}">
			<slot name=products>
				all products
			</slot>
		</a>
	`
})

