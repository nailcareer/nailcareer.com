
import {html} from "@benev/slate"
import {GqlProduct} from "shopify-shepherd"
import {unsafeHTML} from "lit/directives/unsafe-html.js"

import {img} from "./parts/img.js"
import {Pills} from "../pills/view.js"
import {Price} from "../price/view.js"
import {styles} from "./styles.css.js"
import {slate} from "../../slate.js"
import {Choice, Img} from "./parts/types.js"
import {Coolbutton} from "../coolbutton/view.js"
import {render_img} from "./parts/render_img.js"
import {ChoiceHelper} from "./parts/choice_helper.js"
import {ProductHelper} from "./parts/product_helper.js"
import {render_options} from "./parts/render_options.js"
import {add_button} from "../coolbutton/helpers/add_button.js"
import {ProductRecommendation} from "../product_recommendation/view.js"

export const ProductFocus = slate.shadow_view({
		styles,
		name: "product-focus",
	}, use => (product: GqlProduct) => {

	const {cart, modal} = use.context

	const state = use.flatstate({
		choices: [] as Choice[],
	})

	const productHelper = new ProductHelper(product)
	const choiceHelper = new ChoiceHelper(productHelper, state.choices)

	function set_choice(name: string, value: undefined | string) {
		state.choices = state.choices
			.filter(choice => choice.name !== name)

		if (value !== undefined)
			state.choices.push({name, value})
	}

	return html`
		<div
			part=grid
			?data-no-additional-images=${productHelper.images.length < 2}
			?data-no-options=${productHelper.variants.length < 2}>

			<figure part=figure>
				${render_img({
					part: "img",
					img: img.large(choiceHelper.chosen_image),
					onclick: (_: MouseEvent, img: Img) => (
						modal.open({
							kind: "image",
							img,
						})
					),
				})}
			</figure>

			<h1 part=title>${product.title}</h1>

			${Pills([product], {attrs: {class: "pills", part: "pills", gpart: "pills"}})}

			<div part=options class=options>
				${render_options(choiceHelper, set_choice)}
			</div>

			<div part=buy class=buy>
				${Price([choiceHelper.selected_variant], {attrs: {class: "price"}})}
				${add_button({
					Coolbutton,
					cart,
					product,
					variant_id: choiceHelper.selected_variant.id,
					allow_select: false,
				})}
			</div>

			<aside part=aside class=aside>
				${choiceHelper.side_images.map(image =>
					render_img({
						part: "img",
						img: img.large(image),
						onclick: (_: MouseEvent, img: Img) => (
							modal.open({
								kind: "image",
								img,
							})
						),
					})
				)}
			</aside>

			<section part=standard-content class="standard-content">
				${unsafeHTML(product.descriptionHtml)}
			</section>

		</div>
		<div part=recbox class=recommendations>
			<h2>Customers also bought:</h2>
			${ProductRecommendation([product.id, 3], {
				attrs: {
					part: "recommendations",
				},
			})}
		</div>
	`
})

