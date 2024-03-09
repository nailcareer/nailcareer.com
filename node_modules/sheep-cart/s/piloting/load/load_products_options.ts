
import {Op} from "@benev/slate"
import {GqlProduct, PageGenerator} from "shopify-shepherd"

import {Situation} from "../../context/types/situations.js"

export type ProductListingOptions = {
	subject: string
	wrap: (list: Situation.Base.ProductList) => Situation.Whatever
	set_situation_op: Op.Setter<Situation.Whatever>
	generator: PageGenerator<GqlProduct>
	previous_products?: GqlProduct[]
}

