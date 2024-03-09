
import {Route} from "../../../routing/types.js"

export function populate_input_with_route_search_terms_when_user_is_not_focused_on_input(
		route: Route,
		user_is_focused_on_input: boolean,
		input: HTMLInputElement,
	) {

	const is_search = route.zone === "search"
	const not_focused = !user_is_focused_on_input

	if (not_focused) {
		if (is_search)
			input.value = route.terms.join(" ")
		else
			input.value = ""
	}
}

