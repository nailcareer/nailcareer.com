
import yaml from "js-yaml"
import {Product, ProductCatalog} from "../types.js"
import {read} from "../buildtools/reading-and-writing.js"

export async function loadProductCatalog(path: string): Promise<ProductCatalog> {
	return yaml.load(await read(path))
}
