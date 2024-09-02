
import {html, svg} from "@benev/slate"
import {prep_render_op} from "@benev/slate"

import icon_loader from "../icons/feather/icon_loader.js"
import icon_alert_circle from "../icons/feather/icon_alert_circle.js"

export const render_op = prep_render_op({
	loading: () => html`
		<span class="op loading">
			${icon_loader(svg)}
		</span>
	`,
	error: reason => html`
		<span class="op error">
			${icon_alert_circle(svg)}
			${reason}
		</span>
	`
})

