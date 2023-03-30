
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import minimalPageHtml from "../partials/minimal-page.html.js"

export default ({
	base, mode, ...context
}: NceWebsiteContext) => minimalPageHtml({
...context,
base,
mode,
pageName: "academy",
pageSubtitle: "Livechat",
mainHtml: html`

	<div data-academy-page=livestream-chat>
		<div class=plate>
			<xiome-chat></xiome-chat>
		</div>
	</div>

`})
