
import {GqlCollection, GqlTag, Shopify} from "shopify-shepherd"
import {Op, Flat, CSSResultGroup, Context as SlateContext} from "@benev/slate"

import {Cart} from "../carting/cart.js"
import {Route} from "../routing/types.js"
import {Modal} from "../modaling/modal.js"
import {Router} from "../routing/router.js"
import {Situation} from "./types/situations.js"
import {State, init_state} from "./parts/init_state.js"
import {CartStore} from "../carting/parts/cart_store.js"

export class Context extends SlateContext {

	#state: State
	readonly state: State

	cart: Cart
	modal = new Modal()

	constructor(
			public shopify: Shopify,
			public router: Router,
			public theme: CSSResultGroup,
			cart_store: CartStore,
		) {
		super()
		this.#state = init_state(router)
		this.state = Flat.readonly(this.#state)
		this.cart = new Cart(this.shopify, cart_store)
	}

	set_route = (route: Route) => this.#state.route = route
	set_tags = (tags: GqlTag[]) => this.#state.tags = tags
	set_collections = (collections: GqlCollection[]) => this.#state.collections = collections
	set_situation_op = (op: Op.For<Situation.Whatever>) => this.#state.situation_op = op

	toggle_cart_open = (open = !this.#state.cart_open) => {
		this.#state.cart_open = open
	}
}

