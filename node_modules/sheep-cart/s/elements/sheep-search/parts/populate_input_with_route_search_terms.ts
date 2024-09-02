
import {Router} from "../../../routing/router.js"

export async function populate_input_with_route_search_terms(
		wait: Promise<void>,
		router: Router,
		get_input: () => HTMLInputElement,
	) {

	await wait

	if (router.route.zone === "search")
		get_input().value = router.route.terms.join(" ")
}

