
import {Route} from "../../types.js"

export type Translator<R extends Route> = {
	hashify(route: R): string
	routify(hashparts: string[]): R
}

export function translator<R extends Route>(t: Translator<R>) {
	return t
}

