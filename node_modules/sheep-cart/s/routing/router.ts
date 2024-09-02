
import {pub} from "@benev/slate"

import {Translation} from "./hashing/translation.js"
import {HomeArea, Route, RouterOptions, SetHash} from "./types.js"

export class Router {
	#set_hash: SetHash
	#translation: Translation
	#route: Route
	#home: HomeArea

	on_route_change = pub<Route>()

	constructor({home, prefix = "", set_hash}: RouterOptions) {
		this.#home = home
		this.#set_hash = set_hash
		this.#route = {zone: "home", area: home}
		this.#translation = new Translation(home, prefix)
	}

	static setup(home: HomeArea, prefix: string = "") {
		const router = new Router({
			home,
			prefix,
			set_hash: hash => location.hash = hash,
		})
		router.apply_hash(location.hash)
		addEventListener("hashchange", router.hashchange)
		return router
	}

	get route() {
		return this.#route
	}

	set route(r: Route) {
		const hash = this.#translation.hashify(r)
		this.#set_hash(hash)
	}

	apply_hash(hash: string) {
		const route = this.#translation.routify(hash)
		this.#route = route
		this.on_route_change.publish(route)
	}

	hashchange = (event: HashChangeEvent) => {
		const {hash} = new URL(event.newURL)
		this.apply_hash(hash)
	}

	#routefor(route: Route) {
		const hash = this.#translation.hashify(route)
		return {
			url: "#" + hash,
			go: () => this.#set_hash(hash),
		}
	}

	routes = {
		home: () =>
			this.#routefor({zone: "home", area: this.#home}),

		collections: () =>
			this.#routefor({zone: "collections"}),

		products: () =>
			this.#routefor({zone: "products"}),

		search: (terms: string[], tags: string[]) =>
			this.#routefor({zone: "search", terms, tags}),

		collection: ({id, handle: label}: {id: string, handle: string}) =>
			this.#routefor({zone: "collection", id, label}),

		product: ({id, handle: label}: {id: string, handle: string}) =>
			this.#routefor({zone: "product", id, label}),
	}

	get search_terms() {
		const route = this.#route
		return (route && route.zone === "search")
			? route.terms
			: []
	}

	get search_tags() {
		const route = this.#route
		return (route && route.zone === "search")
			? route.tags
			: []
	}
}

