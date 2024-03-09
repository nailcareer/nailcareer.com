
import {html} from "@benev/slate"
import {GqlProduct} from "shopify-shepherd"

import {styles} from "./styles.css.js"
import {slate} from "../../slate.js"
import {ProductCard} from "../product_card/view.js"

export const ProductRecommendation = slate.shadow_view({
		styles,
		name: "product-recommendation",
	}, use => (id: string, count: number) => {

	const state = use.flatstate({recommendations: [] as GqlProduct[]})

	use.setup(() => {
		void async function () {
			const products = await use.context
				.shopify
				.product_recommendations({product_id: id})

			state.recommendations = products
		}()
		return () => {}
	})

	return html`
		${state.recommendations.slice(0, count).map(r =>
			ProductCard([r], {attrs: {part: "card", gpart: "card"}})
		)}
	`
})

