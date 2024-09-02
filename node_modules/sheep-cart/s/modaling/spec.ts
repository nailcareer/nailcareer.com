
export namespace ModalSpec {
	export type Kind = "confirm" | "image" | "cart"

	export interface Base {
		kind: Kind
	}

	export interface Image extends Base {
		kind: "image"
		img: {src: string, alt: string}
	}

	export interface Cart extends Base {
		kind: "cart"
	}

	export type Whatever = Image | Cart
}

