
import yaml from "js-yaml"
import {NceProduct} from "../types.js"
import {read} from "../buildtools/reading-and-writing.js"

export async function loadProductData(path: string) {
	const productData = yaml.load(await read(path))
	return Object.entries(productData)
		.map(([name, data]: [string, any]) => <NceProduct>({
			name,
			...data,
		}))
}
