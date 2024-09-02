
import {HomeArea, Route} from "../types.js"
import {translators} from "./translators.js"
import {Translator} from "./parts/translator.js"
import {parse_hash_parts} from "./parts/parse_hash_parts.js"

export class Translation {
	#prefix: string
	#home: HomeArea

	constructor(home: HomeArea, prefix: string) {
		this.#prefix = prefix
		this.#home = home
	}

	#get(zone: string) {
		const t = translators(this.#home)

		if (zone === "")
			zone = "home"

		if (!(zone in t))
			zone = "not_found"

		return t[zone as keyof typeof translators] as Translator<Route>
	}

	routify(hash: string) {
		const [zone, ...hashparts] = parse_hash_parts(this.#prefix, hash)
		return this.#get(zone).routify(hashparts)
	}

	hashify(route: Route) {
		return this.#prefix + this.#get(route.zone).hashify(route)
	}
}

