
import {PageGenerator} from "../types/page_generator.js"

export async function all<N>(generator: PageGenerator<N>) {
	const all: N[] = []

	for await (const [nodes] of generator)
		for (const node of nodes)
			all.push(node)

	return all
}

