
import {GqlCheckoutUserError} from "../graphql/checkout.js"

export class ShopifyShepherdError extends Error {
	name = this.constructor.name
}

export class ShopifyResponseError extends ShopifyShepherdError {
	constructor({message, path}: {message: string, path: string[]}) {
		super(`${message} ⮞ ${path.join(" 🡪 ")}`)
	}
}

export class ShopifyNotFoundError extends ShopifyShepherdError {
	constructor(subject: string) {
		super(`not found (${subject})`)
	}
}

export class ShopifyCheckoutError extends ShopifyShepherdError {
	errors: GqlCheckoutUserError[]

	constructor(errors: GqlCheckoutUserError[]) {
		super(ShopifyCheckoutError.format(errors))
		this.errors = errors
	}

	static format(errors: GqlCheckoutUserError[]): string {
		return errors.map(error =>
			`(${error.code}) ${error.field.join('.')}: ${error.message}`
		).join(";")
	}
}

