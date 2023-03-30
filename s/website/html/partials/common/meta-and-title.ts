
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export function metaAndTitle(pageSubtitle: string) {
	return html`
		<meta charset="utf-8"/>
		<meta name=viewport content="width=device-width,initial-scale=1"/>
		<title>
			${pageSubtitle ? "NCE " + pageSubtitle : "Nail Career Education"}
		</title>
	`
}
