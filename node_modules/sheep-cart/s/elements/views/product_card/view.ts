
import {html} from "@benev/slate"
import {GqlProduct} from "shopify-shepherd"

import {styles} from "./styles.css.js"
import {Price} from "../price/view.js"
import {Pills} from "../pills/view.js"
import {slate} from "../../slate.js"
import {Coolbutton} from "../coolbutton/view.js"
import {img} from "../product_focus/parts/img.js"
import {display_price} from "./parts/display_price.js"
import {add_button} from "../coolbutton/helpers/add_button.js"
import {render_img} from "../product_focus/parts/render_img.js"
import {ProductHelper} from "../product_focus/parts/product_helper.js"

export const ProductCard = slate.shadow_view({
		styles,
		name: "product-card",
	}, use => (product: GqlProduct) => html`

	<a href="${use.context.router.routes.product(product).url}">

		${render_img({
			part: "img",
			img: img.tiny(new ProductHelper(product).featured_image),
		})}

		<div part=plate>
			<h1 part="title a" data-gpart="a">
				${product.title}
			</h1>

			${Pills([product], {attrs: {part: "pills", gpart: "pills"}})}

			<div class=action>
				${add_button({
					product,
					cart: use.context.cart,
					allow_select: true,
					Coolbutton,
					variant_id: new ProductHelper(product).first_variant.id,
				})}

				<div class=pricebox>
					${display_price({
						product,
						single_price: variant => html`
							${Price([variant], {attrs: {part: "price singleprice"}})}
						`,
						multiple_prices: variant => html`
							<div class=info>starts at</div>
							${Price([variant], {attrs: {part: "price multiprice"}})}
						`,
					})}
				</div>

			</div>
		</div>
	</a>
`)

