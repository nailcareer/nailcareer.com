
import {html} from "@benev/slate"

import {slate} from "../../slate.js"
import {styles} from "./styles.css.js"
import {VariantPricing} from "./parts/types.js"
import {parse_money} from "./parts/parse_money.js"
import {render_sale_tag} from "./parts/render_sale_tag.js"
import {render_money_value} from "./parts/render_money_value.js"

export const Price = slate.shadow_view({
		styles,
		name: "price",
	}, _use => (variant: VariantPricing) => {

	const {value, comparison} = parse_money(variant)

	return html`
		${comparison
			? render_sale_tag(value, comparison)
			: undefined}

		<div class=coolstack>
			<div class="pricetag" ?data-sale=${!!comparison}>
				${render_money_value(value)}
			</div>

			${comparison
				? html`
					<div class="pricetag comparison">
						${render_money_value(comparison)}
						<div part=slash></div>
					</div>
				`
				: undefined}
		</div>
	`
})

