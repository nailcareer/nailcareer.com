

import pageHtml from "../partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {NceWebsiteContext} from "../../types.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "store",
pageSubtitle: "Store",
mainHtml: html`

	<header class="header slice">
		<div class=bigbar>
			<sheep-search></sheep-search>
			<sheep-nav>
				<span slot=collections>departments</span>
			</sheep-nav>
		</div>
	</header>

	<sheep-catalog
		class=slice
		prioritized-collections="
			gid://shopify/Collection/273763270692
		"
		hidden-collections="
			gid://shopify/Collection/273763958820
			gid://shopify/Collection/166703661092
		"
	></sheep-catalog>

`})

