
import {CartStoreData} from "./types.js"

export class CartStore {
	#key: string
	#storage: Storage

	constructor(key: string, storage: Storage) {
		this.#key = key
		this.#storage = storage
	}

	save(pack: CartStoreData.V1["pack"]) {
		const v1: CartStoreData.V1 = {
			version: 1,
			pack,
		}
		this.#storage.setItem(
			this.#key,
			JSON.stringify(v1),
		)
	}

	load() {
		let pack: CartStoreData.V1["pack"] = {items: []}
		const text = this.#storage.getItem(this.#key)
		if (text) {
			try {
				const data = JSON.parse(text)
				if (data.version === 1)
					pack = data.pack
			}
			catch (err) {}
		}
		return pack
	}
}

