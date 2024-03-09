
import {html} from "@benev/slate"
import {ChoiceHelper} from "./choice_helper.js"

export function render_options(
		choiceHelper: ChoiceHelper,
		set_choice: (name: string, value: string) => void,
	) {

	const {productHelper: {product}} = choiceHelper

	function is_selected(name: string, value: string) {
		return value === choiceHelper.get_choice(name)
	}

	function handle_input(name: string) {
		return (event: InputEvent) => {
			const target = event.target as HTMLSelectElement
			set_choice(name, target.value)
		}
	}

	return product.options.map(({name, values}) => html`
		<label>
			<span>${name}</span>
			<select @input=${handle_input(name)}>
				${values.map(value => html`
					<option ?selected=${is_selected(name, value)}>
						${value}
					</option>
				`)}
			</select>
		</label>
	`)
}

