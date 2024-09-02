
import { ShopifyNotFoundError } from "../../parts/errors.js"
import {Fetcher} from "./types/fetcher.js"
import {PageGenerator} from "./types/page_generator.js"

export async function *paginate<N>(fetch: Fetcher<N>): PageGenerator<N> {
	let after: string | undefined
	let fetch_count = 0
	const there_are_more_pages = () => !!((fetch_count === 0) || after)
	let more = true

	while (more) {
		fetch_count += 1

		const result = await fetch(after)
		if (!result)
			throw new ShopifyNotFoundError(`paginated resource not found`)

		const {
			edges,
			pageInfo: {hasNextPage, endCursor},
		} = result

		after = hasNextPage
			? endCursor
			: undefined

		const nodes = edges.map(edge => edge.node)
		more = there_are_more_pages()

		yield [nodes, more]
	}
}

