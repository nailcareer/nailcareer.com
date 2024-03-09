
import {Op} from "@benev/slate"
import {GqlCollection, Shopify} from "shopify-shepherd"

import {HomeArea} from "../../routing/types.js"
import {Situation} from "../../context/types/situations.js"

export type PilotParams = {
	home: HomeArea
	shopify: Shopify
	page_size: number
	set_situation_op: Op.Setter<Situation.Whatever>
	collections_promise: Promise<GqlCollection[]>
}

