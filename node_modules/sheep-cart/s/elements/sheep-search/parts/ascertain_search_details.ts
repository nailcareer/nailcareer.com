
import {Router} from "../../../routing/router.js"

export function ascertain_search_details(router: Router, value: string) {
	const terms = value.split(/\s+/).filter(t => t.length)
	const tags = router.search_tags
	const there_is_nothing_to_search_for = terms.length === 0 && tags.length === 0
	return {
		terms,
		there_is_nothing_to_search_for,
	}
}

