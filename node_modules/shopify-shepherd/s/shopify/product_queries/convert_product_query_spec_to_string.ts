
import {querytext} from "./utils/querytext.js"

export type ProductQuerySpec = {
	tags?: string[]
	terms?: string[]
}

export function convert_product_query_spec_to_string({
		tags = [],
		terms = [],
	}: ProductQuerySpec = {}): string | undefined {

	const segments: string[] = []

	if (tags.length)
		segments.push(
			tags
				.map(tag => querytext`(tag:${tag})`)
				.join(" AND ")
		)

	if (terms.length)
		segments.push(terms
			.map(term => querytext`(title:*${term}* OR tag:*${term}*)`)
			.join(" AND ")
		)

	return segments.length
		? segments
			.map(segment => `(${segment})`)
			.join(" AND ")
		: undefined
}

