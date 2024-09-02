
import {Navlink} from "./types/navlink.js"
import {html} from "../../framework/component.js"

export function renderNavlink(currentPage: string) {
	return function({label, href, tags}: Navlink) {

		const tagString = tags.join(" ")
		const partString = [
			"navlink",
			...((tags.length > 0)
				?["tag"]
				:[]
			),
			...tags,
		].join(" ")

		const pageName = label.toLowerCase()
		const isCurrentPage = pageName === currentPage

		return ((tags.length > 0)

			? html`
				<a
					href="${href}"
					part="${partString}"
					data-tag="${tagString}"
					?data-marked=${isCurrentPage}>
						${label}
				</a>
			`

			: html`
				<a
					href="${href}"
					part="${partString}"
					?data-marked=${isCurrentPage}>
						${label}
				</a>
			`
		)
	}
}
