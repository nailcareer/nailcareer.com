
import {html, attrBool, attrMaybe} from "xiome/x/toolbox/hamster-html/html.js"

export enum CommunityPage {
	Admin,
	Membership,
	QuestionsBoard,
	Livestream,
}

export function communitySubnav(current: CommunityPage) {
	return html`
		<nav class=subnav>
			${pages.map(page => html`
				<a
					${attrMaybe("href", page.link)}
					${attrMaybe("data-tag", page.tag)}
					${attrBool("data-marked", page.id === current)}
					>
						${page.label}
				</a>
			`)}
		</nav>
	`
}

const pages: {
	id: CommunityPage
	label: string
	link: undefined | string
	tag: undefined | string
}[] = [
	{
		id: CommunityPage.Membership,
		label: "Membership",
		link: "./",
		tag: "new",
	},
	{
		id: CommunityPage.QuestionsBoard,
		label: "Q&A",
		link: "./qa",
		tag: undefined,
	},
	{
		id: CommunityPage.Livestream,
		label: "Livestream",
		link: undefined,
		tag: "soon",
	},
]
