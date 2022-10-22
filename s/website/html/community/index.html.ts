
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

	<div data-community-page=welcome>
		<div class=plate>
			<nav class=subnav>
				<a href="./" data-marked>Welcome</a>
				<a href="./qa">Q&amp;A</a>
				<a data-tag="soon">Livestream</a>
				<a data-tag="soon">Premium</a>
			</nav>
			<div class=subs>
				<h1>Join Suzie's next event!</h1>
				<xiome-store-subscription-catalog></xiome-store-subscription-catalog>
				<xiome-store-customer-portal>
					Edit Billing Settings
				</xiome-store-customer-portal>
			</div>
		</div>
	</div>

`})
