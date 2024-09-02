
import {TemplateResult, html} from "@benev/slate"

import {slate} from "../../slate.js"
import {styles} from "./styles.css.js"

export type CoolbuttonParams = {
	active: boolean
	text?: string | TemplateResult
	onclick: (event: MouseEvent) => void
}

export const Coolbutton = slate.shadow_view({
		name: "coolbutton",
		styles,
	}, _use => ({active, text, onclick}: CoolbuttonParams) => html`

	<button
		part=button
		@click=${onclick}
		?disabled=${!active}>
		<slot part=slot></slot>
		${text}
	</button>

`)

