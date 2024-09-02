
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export function redirect(destination: string) {

	return () => (html`

		<!doctype html>

		<meta
			http-equiv="refresh"
			content="0;URL='${destination}'"
			/>

	`)
}
