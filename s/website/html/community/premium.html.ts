
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "community",
pageSubtitle: "Community",
mainHtml: html`

	<div data-community-page=premium>
		<div class=plate>
			<nav class=subnav>
				<a href="./" data-marked>Welcome</a>
				<a href="./qa">Q&amp;A</a>
				<a data-tag="soon">Livestream</a>
				<a data-tag="soon" data-marked>Premium</a>
			</nav>
			<h1>Premium Coming Soon</h1>
		</div>
	</div>

`})
