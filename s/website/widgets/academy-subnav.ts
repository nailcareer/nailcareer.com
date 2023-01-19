
import {attrBool, attrMaybe, html} from "xiome/x/toolbox/hamster-html/html.js"

export type AcademyPage = (
	| "supporter"
	| "qa"
	| "livestream"

	| "admin"
	| "livestream-chat"
	| "premium"
)

export function academySubnav(currentPage: AcademyPage) {

	const link = ({page, label, url, tag}: {
			page: AcademyPage
			label: string
			url?: string
			tag?: string
		}) => (html`

		<a
			${attrBool("data-marked", page === currentPage)}
			${attrMaybe("href", url)}
			${attrMaybe("data-tag", tag)}
			>
			${label}
		</a>
	`)

	return html`
		<nav class=subnav>

			${link({
				page: "supporter",
				label: "Supporter",
				url: "./",
			})}

			${link({
				page: "qa",
				label: "Q&A",
				url: "./qa",
			})}

			${link({
				page: "livestream",
				label: "Livestream",
				url: "./livestream",
			})}

		</nav>
	`
}
