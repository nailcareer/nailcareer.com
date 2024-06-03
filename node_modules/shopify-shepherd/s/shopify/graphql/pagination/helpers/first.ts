
import {PageGenerator} from "../types/page_generator.js"

export async function first<N>(generator: PageGenerator<N>) {
	const {value} = await generator.next()
	const [nodes] = value!
	return nodes
}

