
import {GqlCollection} from "shopify-shepherd"

export function sort_collections(
		collections: GqlCollection[],
		prioritized_ids: string[],
		hidden_ids: string[],
	) {

	let prioritized: GqlCollection[] = []
	let unprioritized: GqlCollection[] = []

	for (const collection of collections) {
		if (prioritized_ids.includes(collection.id))
			prioritized.push(collection)
		else
			unprioritized.push(collection)
	}

	const prioritized_in_order = prioritized_ids
		.map(id => prioritized.find(c => c.id === id))
		.filter(c => !!c) as GqlCollection[]

	const unprioritized_in_order = unprioritized
		.sort(alphabetize)

	return [
		...prioritized_in_order,
		...unprioritized_in_order,
	].filter(c => !hidden_ids.includes(c.id))
}

function alphabetize(a: GqlCollection, b: GqlCollection) {
	return a.title.localeCompare(b.title)
}

