
import theme from "./framework/theme.css.js"
import {NceEmail} from "./components/nce-email.js"
import {NcePhone} from "./components/nce-phone.js"
import {NceHeader} from "./components/nce-header.js"
import {NceFooter} from "./components/nce-footer.js"
import {themeComponents, registerComponents} from "./framework/component.js"

registerComponents(
	themeComponents(theme, {
		NceEmail,
		NcePhone,
		NceHeader,
		NceFooter,
	})
)

import "shopper/x/install-shopper.js"
import "carouse"
import {install_sheep_cart, register_to_dom} from "sheep-cart"

void async function main() {
	const {elements, load} = install_sheep_cart({
		home: "collections",
		domain: "nail-career-education.myshopify.com",
		storefront_access_token: "493f6df6e7fb5bfc231bb9f221fecdee",
	})

	register_to_dom(elements)
	await load()

	console.log("💅")
}()

