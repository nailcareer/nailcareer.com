
import {html} from "@benev/slate"
import {GqlProduct} from "shopify-shepherd"

import {Coolbutton} from "../view.js"
import {Cart} from "../../../../carting/cart.js"

export type CardAddParams = {
	cart: Cart
	variant_id: string
	product: GqlProduct
	allow_select: boolean
	Coolbutton: typeof Coolbutton
}

export function add_button({
		cart,
		product,
		variant_id,
		allow_select,
		Coolbutton,
	}: CardAddParams) {

	type ButtonType = (
		| "select_from_variants"
		| "in_cart"
		| "add_to_cart"
		| "sold_out"
	)

	const number_of_variants = product
		.variants
		.edges
		.length

	const variant = product
		.variants
		.edges
		.map(e => e.node)
		.find(v => v.id === variant_id)!

	const unit = cart
		.units
		.find(u => u.variant_id === variant_id)

	const button_type: ButtonType = (allow_select && number_of_variants > 1)
		? "select_from_variants"
		: unit
			? "in_cart"
			: variant.availableForSale
				? "add_to_cart"
				: "sold_out"

	switch (button_type) {
		case "select_from_variants":
			return Coolbutton([{active: true, onclick: () => {}}], {
				attrs: {
					part: "addbutton x-select-from-variants",
					gpart: "addbutton x-select-from-variants",
				},
				content: html`
					${number_of_variants} Options
				`,
			})

		case "in_cart":
			return Coolbutton([{active: false, onclick: () => {}}], {
				attrs: {
					part: "addbutton x-in-cart",
					gpart: "addbutton x-in-cart",
				},
				content: html`
					in cart
				`,
			})

		case "add_to_cart":
			return Coolbutton([{
					active: true,
					onclick: event => {
						event.preventDefault()
						cart.add(variant_id, product)
					},
				}], {
				attrs: {
					part: "addbutton x-add-to-cart",
					gpart: "addbutton x-add-to-cart",
				},
				content: html`
					Add to Cart
				`,
			})

		case "sold_out":
			return Coolbutton([{active: false, onclick: () => {}}], {
				attrs: {
					part: "addbutton x-sold-out",
					gpart: "addbutton x-sold-out",
				},
				content: html`
					Sold Out
				`,
			})

		default:
			throw new Error(`unknown button type "${button_type}"`)
	}
}

export const addbutton_states = `
	x-add-to-cart,
	x-select-from-variants,
	x-in-cart,
	x-sold-out,
`

