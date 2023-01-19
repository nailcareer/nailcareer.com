
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
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
