
export type RouterOptions = {
	prefix: string
	set_hash: SetHash
	home: HomeArea
}

export type HomeArea = "collections" | "products"

export type Routes = {
	home: {
		zone: "home"
		area: HomeArea
	}

	collections: {
		zone: "collections"
	}

	products: {
		zone: "products"
	}

	search: {
		zone: "search"
		terms: string[]
		tags: string[]
	}

	collection: {
		zone: "collection"
		id: string
		label: string
	}

	product: {
		zone: "product"
		id: string
		label: string
	}

	not_found: {
		zone: "not_found"
	}
}

export type Route =
	| Routes["home"]
	| Routes["collections"]
	| Routes["products"]
	| Routes["search"]
	| Routes["collection"]
	| Routes["product"]
	| Routes["not_found"]

export type SetHash = (hash: string) => void
export type OnRouteChange = (route: Route) => void

