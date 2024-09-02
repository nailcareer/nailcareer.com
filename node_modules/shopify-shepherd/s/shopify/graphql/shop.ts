
import {gql} from "../../tools/gql.js"
import {GraphRequest} from "./types/graph_request.js"

export function make_request_for_shop(): GraphRequest {
	return {
		query: gql`
			query FetchShopInfo {
				shop {
					name
					description
					shipsToCountries
					paymentSettings {
						currencyCode
						countryCode
					}
				}
			}
		`,
	}
}

export type GqlShop = {
	name: string
	description: string
	shipsToCountries: string[]
	paymentSettings: {
		currencyCode: string
		countryCode: string
	}
}

