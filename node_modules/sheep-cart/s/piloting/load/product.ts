
import {Op} from "@benev/slate"
import {GqlProduct, ShopifyNotFoundError} from "shopify-shepherd"

import {Situation} from "../../context/types/situations.js"

export async function load_single_product(
		set_situation_op: Op.Setter<Situation.Whatever>,
		product: Promise<GqlProduct>,
	) {

	await Op.run<Situation.Whatever>(
		set_situation_op,
		async() => {
			try {
				return {
					type: "single_product",
					product: await product,
				} satisfies Situation.SingleProduct
			}
			catch (error) {
				if (error instanceof ShopifyNotFoundError)
					return {
						type: "not_found",
						message: "Product not found",
					} satisfies Situation.NotFound
				else
					throw error
			}
		},
	)
}

