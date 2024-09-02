import { attrBool, attrMaybe, html } from "xiome/x/toolbox/hamster-html/html.js";
export function academySubnav(currentPage) {
    const link = ({ page, label, url, tag }) => (html `

		<a
			${attrBool("data-marked", page === currentPage)}
			${attrMaybe("href", url)}
			${attrMaybe("data-tag", tag)}
			>
			${label}
		</a>
	`);
    return html `
		<nav class=subnav>

			${link({
        page: "academy",
        label: "Membership",
        tag: "soon",
        // url: "./",
    })}

			${link({
        page: "livestream",
        label: "Livestream",
        url: "./livestream",
        tag: "new",
    })}

			${link({
        page: "qa",
        label: "Q&A",
        url: "./qa",
    })}

		</nav>
	`;
}
//# sourceMappingURL=academy-subnav.js.map