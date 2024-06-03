
import {html, svg} from "@benev/slate"
import icon_shopping_cart from "../../icons/feather/icon_shopping_cart.js"

import {slate} from "../slate.js"
import {styles} from "./styles.css.js"

export const SheepCartButton = slate.shadow_component({styles}, use => {
	const attrs = use.attrs({"triggers-modal": Boolean})

	const {units} = use.context.cart

	const onclick = attrs["triggers-modal"]
		? () => use.context.modal.open({kind: "cart"})
		: () => {}

	return html`
		<button
			part=button
			@click=${onclick}>

			${icon_shopping_cart(svg)}

			<div class=count ?hidden=${units.length === 0}>
				${units.length}
			</div>
		</button>
	`
})

