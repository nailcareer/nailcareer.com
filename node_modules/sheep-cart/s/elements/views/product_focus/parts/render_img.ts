
import {html} from "@benev/slate"
import {Img} from "./types.js"

export function render_img({
		img,
		part = "",
		onclick = () => {},
	}: RenderImgParams) {

	return html`
		<img
			alt="${img.alt}"
			src="${img.src}"
			part="${part}"
			@click=${(event: MouseEvent) => onclick(event, img)}
			/>
	`
}

export type RenderImgParams = {
	img: Img
	part?: string
	onclick?: (event: MouseEvent, img: Img) => void
}

