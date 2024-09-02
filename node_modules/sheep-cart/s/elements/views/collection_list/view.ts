
import {html} from "@benev/slate"

import {styles} from "./style.css.js"
import {slate} from "../../slate.js"
import {bg_img} from "./utils/bg_img.js"
import {Options} from "./utils/options.js"
import {sort_collections} from "./utils/sort_collections.js"

export const CollectionList = slate.shadow_view({
		name: "collection-list",
		styles,
	}, use => ({collections, prioritized, hidden}: Options) => html`

	<div part=grid>
		${sort_collections(collections, prioritized, hidden)
			.map(collection => html`
				<a
					part=bar
					data-id="${collection.id}"
					style="${bg_img(collection)}"
					href="${use.context.router.routes.collection(collection).url}">
					${collection.title}
				</a>
			`)
		}
	</div>
`)

