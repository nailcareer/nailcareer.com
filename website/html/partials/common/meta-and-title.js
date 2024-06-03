import { html } from "xiome/x/toolbox/hamster-html/html.js";
export function metaAndTitle(pageSubtitle) {
    return html `
		<meta charset="utf-8"/>
		<meta name=viewport content="width=device-width,initial-scale=1"/>
		<title>
			${pageSubtitle ? "NCE " + pageSubtitle : "Nail Career Education"}
		</title>
	`;
}
//# sourceMappingURL=meta-and-title.js.map