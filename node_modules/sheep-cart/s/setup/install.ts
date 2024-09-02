
import {CSSResultGroup} from "@benev/slate"
import {Shopify, ShopifySettings} from "shopify-shepherd"

import {slate} from "../elements/slate.js"
import {Router} from "../routing/router.js"
import {HomeArea} from "../routing/types.js"
import {Context} from "../context/context.js"
import {elements} from "../elements/elements.js"
import {prepare_pilot} from "../piloting/pilot.js"
import {CartStore} from "../carting/parts/cart_store.js"
import {theme as default_theme} from "../elements/theme.css.js"

export function install_sheep_cart({
		domain,
		storefront_access_token,
		page_size = 50,
		home = "products",
		theme = default_theme,
	}: ShopifySettings & {
		home?: HomeArea,
		page_size?: number,
		theme?: CSSResultGroup,
	}) {

	const shopify = Shopify.setup({
		domain,
		storefront_access_token,
	})

	const router = Router.setup(home)

	const context = new Context(
		shopify,
		router,
		theme,
		new CartStore("sheep_cart", localStorage),
	)

	slate.context = context

	context.cart.load()

	window.addEventListener("storage", () => {
		context.cart.load()
	})

	const collections_promise = Shopify.all(shopify.collections())

	const pilot = prepare_pilot({
		home,
		shopify,
		page_size,
		collections_promise,
		set_situation_op: context.set_situation_op,
	})

	router.on_route_change(context.set_route)
	router.on_route_change(() => pilot(context.state.route))

	return {
		elements,

		async load() {
			await Promise.all([

				void async function load_the_initial_route() {
					await pilot(context.state.route)
				}(),

				void async function load_product_tags() {
					context.set_tags(
						await Shopify.all(shopify.tags())
					)
				}(),

				void async function load_product_collections() {
					context.set_collections(
						await collections_promise
					)
				}(),

			])
		},
	}
}

