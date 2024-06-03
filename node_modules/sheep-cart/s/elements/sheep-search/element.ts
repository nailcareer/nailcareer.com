
import {html, svg, debounce} from "@benev/slate"

import icon_search from "../../icons/feather/icon_search.js"

import {slate} from "../slate.js"
import {style as styles} from "./style.css.js"
import {render_search_tags} from "./tags/render_search_tags.js"
import {ascertain_search_details} from "./parts/ascertain_search_details.js"
import {populate_input_with_route_search_terms} from "./parts/populate_input_with_route_search_terms.js"
import {populate_input_with_route_search_terms_when_user_is_not_focused_on_input} from "./parts/populate_input_with_route_search_terms_when_user_is_not_focused_on_input.js"

export const SheepSearch = slate.shadow_component({styles}, use => {
	const {router} = use.context
	const is_search = router.route.zone === "search" && router.route.terms.length

	function get_input() {
		return use.shadow.querySelector<HTMLInputElement>("input")!
	}

	function get_user_is_focused_on_input() {
		return document.activeElement === use.element || use.element.contains(document.activeElement)
	}

	use.setup(() => {
		populate_input_with_route_search_terms(
			use.element.updateComplete.then(() => undefined),
			use.context.router,
			get_input,
		)
		return use.context.router.on_route_change(route =>
			populate_input_with_route_search_terms_when_user_is_not_focused_on_input(
				route,
				get_user_is_focused_on_input(),
				get_input(),
			)
		)
	})

	const search: () => Promise<void> = debounce(250, () => {
		const {router} = use.context
		const details = ascertain_search_details(router, get_input().value)

		if (details.there_is_nothing_to_search_for)
			router.routes.home().go()
		else
			router.routes.search(details.terms, router.search_tags).go()
	})

	return html`
		<div ?data-active=${is_search} class=searchbox>
			<input part=input type=text @input="${search}"/>
			${icon_search(svg)}
		</div>
		<div class=searchtags>
			${render_search_tags(use.context)}
		</div>
	`
})

