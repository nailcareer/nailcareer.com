
import {Country} from "./types/country.js"
import country_data from "./data/country_data.js"

export class CountryLibrary extends Map<string, Country> {

	constructor() {
		super()
		for (const item of country_data) {
			const {
				name,
				"alpha-2": two_letter,
				"country-code": numerical,
			} = item
			this.set(two_letter, {name, numerical, two_letter})
		}
	}

	query(two_letter_codes: string[]) {
		const known: Country[] = []
		const unknown: string[] = []

		for (const two_letter of two_letter_codes) {
			const info = this.get(two_letter)

			if (info)
				known.push(info)
			else
				unknown.push(two_letter)
		}

		return {known, unknown}
	}

	query_names(two_letter_codes: string[]) {
		const {known, unknown} = this.query(two_letter_codes)
		return [
			...known.map(country => country.name),
			...unknown,
		]
	}
}

