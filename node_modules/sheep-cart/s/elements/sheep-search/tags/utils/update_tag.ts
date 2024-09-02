
import {Router} from "../../../../routing/router.js"

export function update_tag(tag: string, router: Router) {
	return (event: InputEvent) => {
		const target = event.target as HTMLInputElement
		const terms = router.search_terms
		const tag_set = new Set<string>(router.search_tags)

		if (target.checked)
			tag_set.add(tag)
		else
			tag_set.delete(tag)

		const nada = tag_set.size === 0 && terms.length === 0

		if (nada)
			router.routes.home().go()
		else
			router.routes.search(terms, [...tag_set]).go()
	}
}
