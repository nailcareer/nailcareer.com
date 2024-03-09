
import {Op} from "@benev/slate"
import {ShopifyNotFoundError} from "shopify-shepherd"

import {Situation} from "../../context/types/situations.js"
import {ProductListingOptions} from "./load_products_options.js"

export async function load_products_with_recursive_apparatus({
		subject,
		wrap,
		set_situation_op,
		generator,
		previous_products = [],
	}: ProductListingOptions) {

	const this_is_the_initial_listing_call = previous_products.length === 0

	async function load_next_page_of_products(): Promise<Situation.Whatever> {
		try {
			const {value} = await generator.next()
			const [new_products, more] = value!
			const products = [...previous_products, ...new_products]
			const load_more = more
				? () => load_products_with_recursive_apparatus({
					subject,
					wrap,
					set_situation_op,
					generator,
					previous_products: products,
				})
				: undefined
			return wrap({
				products,
				load_more,
				load_more_op: Op.ready(undefined),
			})
		}
		catch (error) {
			if (error instanceof ShopifyNotFoundError)
				return {
					type: "not_found",
					message: `${subject} not found`,
				} satisfies Situation.NotFound
			else
				throw error
		}
	}

	if (this_is_the_initial_listing_call) {
		await Op.run<Situation.Whatever>(
			set_situation_op,
			async() => await load_next_page_of_products(),
		)
	}
	else {
		set_situation_op(Op.ready(wrap({
			products: previous_products,
			load_more: undefined,
			load_more_op: Op.loading(),
		})))
		set_situation_op(Op.ready(
			await load_next_page_of_products()
		))
	}
}

