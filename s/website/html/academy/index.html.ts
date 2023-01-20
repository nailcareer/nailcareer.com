
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {academySubnav} from "../../widgets/academy-subnav.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "academy",
pageSubtitle: "Academy",
mainHtml: html`

	<div data-academy-page=academy>
		<div class=plate>

			${academySubnav("academy")}

			<h1>Join Suzie's Online Community</h1>

			<div class=twosided>
				<div class=cell>
					<img src="/assets/images-medium/courses/suzie-event-01.jpg" alt=""/>
				</div>
				<div class=cell>
					<xiome-store-subscription-catalog></xiome-store-subscription-catalog>
				</div>
			</div>

		</div>
	</div>

`})
