
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {academySubnav} from "../../widgets/academy-subnav.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "community",
pageSubtitle: "Community",
mainHtml: html`

	<div data-community-page=premium>
		<div class=plate>
			${academySubnav("premium")}

			<h1>Premium Coming Soon</h1>
		</div>
	</div>

`})
