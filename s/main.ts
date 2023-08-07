
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

const {elements, load} = install_sheep_cart({
	domain: "dev-bakery.myshopify.com",
	storefront_access_token: "5f636be6b04aeb2a7b96fe9306386f25",
})

register_to_dom(elements)

await load()

console.log("💅")

