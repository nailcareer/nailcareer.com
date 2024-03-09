
import {TemplateResult, html, render, svg} from "@benev/slate"

import icon_x_circle from "../../icons/feather/icon_x_circle.js"

import {slate} from "../slate.js"
import {styles} from "./styles.css.js"
import {ModalSpec} from "../../modaling/spec.js"

type ModalDetails = {
	content: TemplateResult
	on_backdrop_click: () => void
}

export const SheepModal = slate.shadow_component({styles}, use => {
	const attrs = use.attrs({"cart-require-checkout-terms": Boolean})

	use.setup(() => use.context.modal.on.open(o => open_modal(o)))

	const is_slotted = {
		cart_terms_checkbox_label: use.element.querySelector(`[slot="cart-terms-checkbox-label"]`),
	}

	function modal_dressing(id: string, content: TemplateResult) {
		return html`
			<div class=actions>
				<button class=close @click=${() => close_modal(id)}>
					${icon_x_circle(svg)}
				</button>
			</div>
			<div class=contents>
				${content}
			</div>
		`
	}

	function distinguish_modal_details(
			id: string,
			modal: ModalSpec.Whatever,
		): ModalDetails {

		switch (modal.kind) {

			case "image": {
				const {img: {src, alt}} = modal
				const closer = () => close_modal(id)
				return {
					on_backdrop_click: closer,
					content: html`
						<img
							part=img
							src="${src}"
							alt="${alt}"
							@click=${closer} />
					`,
				}
			}

			case "cart": {
				return {
					on_backdrop_click: () => close_modal(id),
					content: html`
						<sheep-cart
							part=cart
							require-checkout-terms=${attrs["cart-require-checkout-terms"]}
							>
							<slot name=cart-terms slot=terms></slot>
							${is_slotted.cart_terms_checkbox_label ? html`
								<slot name=cart-terms-checkbox-label slot=terms-checkbox-label></slot>
							` : undefined}
						</sheep-cart>
					`,
				}
			}
		}
	}

	function open_modal({id, modal}: {id: string, modal: ModalSpec.Whatever}) {
		const dialog = document.createElement("dialog")
		dialog.setAttribute("data-id", id)

		const {content, on_backdrop_click} = (
			distinguish_modal_details(id, modal)
		)

		dialog.onclick = event => {
			if (event.target === dialog)
				on_backdrop_click()
		}

		render(modal_dressing(id, content), dialog)

		use.shadow.appendChild(dialog)
		dialog.showModal()
	}

	function close_modal(id: string) {
		const dialog = use
			.shadow
			.querySelector<HTMLDialogElement>(`[data-id="${id}"]`)

		if (dialog) {
			dialog.close()
			dialog.remove()
		}
	}

	return html``
})

