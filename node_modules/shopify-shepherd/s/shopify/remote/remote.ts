
import {defaults} from "../parts/defaults.js"
import {ShopifyResponseError} from "../parts/errors.js"
import {ShopifySettings} from "./types/shopify_settings.js"
import {GraphRequest} from "../graphql/types/graph_request.js"

export class Remote {
	#settings: ShopifySettings

	constructor(settings: ShopifySettings) {
		this.#settings = settings
	}

	async request<R>({query, variables}: GraphRequest) {
		const {
			domain,
			storefront_access_token,
			api_version = defaults.api_version,
		} = this.#settings

		const url = `https://${domain}/api/${api_version}/graphql`
		const method = "POST"

		const headers = {
			"Content-Type": "application/json",
			"Accept": "application/json",
			"X-Sdk-Variant": "javascript",
			"X-Sdk-Version": "2.19.0",
			"X-Shopify-Storefront-Access-Token": storefront_access_token,
		}

		const response = await fetch(url, {
			method,
			headers,
			mode: "cors",
			body: JSON.stringify({query, variables}),
			credentials: "omit",
		})

		const result = await response.json()

		if ("errors" in result)
			for (const error of result.errors)
				throw new ShopifyResponseError(error)

		return result.data as R
	}
}

