
import {Op} from "@benev/slate"

import {Route} from "../routing/types.js"
import {PilotParams} from "./load/pilot_params.js"
import {load_single_product} from "./load/product.js"
import {Situation} from "../context/types/situations.js"
import {load_products_with_recursive_apparatus} from "./load/load_products_with_recursive_apparatus.js"

export const prepare_pilot = (params: PilotParams) => (route: Route) => {
	const {
		home,
		shopify,
		page_size,
		collections_promise,
		set_situation_op,
	} = params

	function go_collections() {
		return Op.run(
			op => set_situation_op(
				Op.morph(op, collections => ({
					type: "collection_list",
					collections,
				} as Situation.CollectionList))
			),
			async() => collections_promise,
		)
	}

	function go_products() {
		return load_products_with_recursive_apparatus({
			subject: "Products",
			wrap: list => ({...list, type: "all_products"}),
			set_situation_op,
			generator: shopify.products({page_size}),
		})
	}

	try {
		switch (route.zone) {

			case "home":
				return home === "products"
					? go_products()
					: go_collections()

			case "products":
				return go_products()

			case "collections":
				return go_collections()

			case "search":
				return load_products_with_recursive_apparatus({
					subject: "Products",
					wrap: list => ({...list, type: "search_results"}),
					set_situation_op,
					generator: shopify.products({
						page_size,
						query: {
							tags: route.tags,
							terms: route.terms,
						},
					})
				})

			case "collection":
				return load_products_with_recursive_apparatus({
					subject: "Collection",
					wrap: list => ({
						...list,
						type: "products_in_collection",
						collection_id: route.id,
					}),
					set_situation_op,
					generator: shopify.products_in_collection({
						page_size,
						collection_id: route.id,
					})
				})

			case "product":
				return load_single_product(
					set_situation_op,
					shopify.product({id: route.id}),
				)

			case "not_found":
				return set_situation_op(
					Op.ready({type: "not_found"})
				)
		}
	}
	catch (error) {
		console.error("pilot error", error)
	}
}

