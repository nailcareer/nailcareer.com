
import {GqlImage} from "shopify-shepherd"

import {Choice, Img} from "./types.js"
import {ProductHelper} from "./product_helper.js"

export class ChoiceHelper {
	constructor(
		public readonly productHelper: ProductHelper,
		public readonly choices: Choice[],
	) {}

	get_choice(name: string) {
		const {productHelper, choices} = this
		const initial_choices = productHelper.first_variant.selectedOptions

		const found = choices.find(choice => choice.name === name)
			?? initial_choices.find(choice => choice.name === name)

		if (!found)
			throw new Error(`choice not found (${name})`)

		return found.value
	}

	get selected_variant() {
		const {productHelper} = this
		return (productHelper.variants
			.find(variant => variant.selectedOptions
				.every(({name, value}) =>
					value === this.get_choice(name)
				)
			)
		) ?? productHelper.first_variant
	}

	get chosen_image() {
		const {productHelper} = this
		const variant = this.selected_variant
		let image: GqlImage | undefined

		if (variant.image)
			image = productHelper.images
				.find(i => i.id === variant.image!.id)

		if (!image)
			image = productHelper.featured_image

		return image
	}

	get side_images() {
		const primary_image = this.chosen_image
		return this.productHelper.images
			.filter(image => image.id !== primary_image?.id)
	}
}

