
import {register_to_dom} from "@benev/slate"
import {install_sheep_cart} from "./setup/install.js"

const sheep = install_sheep_cart({
	domain: "dev-bakery.myshopify.com",
	storefront_access_token: "5f636be6b04aeb2a7b96fe9306386f25",
	page_size: 10,
	home: "collections",
})

register_to_dom(sheep.elements)

await sheep.load()

console.log("🐑")

