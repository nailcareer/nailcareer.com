
import {HomeArea, Routes} from "../types.js"
import {translator} from "./parts/translator.js"
import {utransform} from "../../tools/utransform.js"

export const translators = (home: HomeArea) => ({

	home: translator<Routes["home"]>({
		hashify: () => "/",
		routify: () => ({zone: "home", area: home}),
	}),

	products: translator<Routes["products"]>({
		hashify: () => "/products",
		routify: () => ({zone: "products"}),
	}),

	collections: translator<Routes["collections"]>({
		hashify: () => "/collections",
		routify: () => ({zone: "collections"}),
	}),

	search: translator<Routes["search"]>({
		hashify: ({terms, tags}) => {
			const e = (t: string[]) => t.map(encodeURIComponent).join(":")
			const query = tags.length > 0
				? e(terms) + "::" + e(tags)
				: e(terms)
			return `/search/${query}`
		},
		routify: hashparts => {
			const [raw] = hashparts
			const splitty = (s: string) => s.split(":").filter(t => t.length)
			if (raw.includes("::")) {
				const [rawterms, rawtags] = raw.split("::")
				const tags = splitty(rawtags)
				const terms = splitty(rawterms)
				return {zone: "search", terms, tags}
			}
			else
				return {zone: "search", terms: splitty(raw), tags: []}
		},
	}),

	collection: translator<Routes["collection"]>({
		hashify: ({label, id}) => `/collection/${label}/${utransform.id.shorten(id)}`,
		routify: ([label, id]) => ({
			zone: "collection",
			label,
			id: utransform.id.expand.collection(id),
		}),
	}),

	product: translator<Routes["product"]>({
		hashify: ({label, id}) => `/product/${label}/${utransform.id.shorten(id)}`,
		routify: ([label, id]) => ({
			zone: "product",
			label,
			id: utransform.id.expand.product(id),
		}),
	}),

	not_found: translator<Routes["not_found"]>({
		hashify: () => "/",
		routify: () => ({zone: "not_found"}),
	}),
})

