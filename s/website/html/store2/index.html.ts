

import pageHtml from "../partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {NceWebsiteContext} from "../../types.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "store2",
pageSubtitle: "Store",
mainHtml: html`

	<sheep-modal></sheep-modal>

	<sheep-cart-modal>
		<sheep-cart></sheep-cart>
	</sheep-cart-modal>

	<div class="follower slice">
		<sheep-cart-button></sheep-cart-button>
	</div>

	<header class="header slice">
		<div class=bigbar>
			<h1>NCE Store</h1>
			<sheep-search></sheep-search>
			<sheep-nav></sheep-nav>
		</div>
	</header>

	<sheep-catalog class=slice></sheep-catalog>

`})

