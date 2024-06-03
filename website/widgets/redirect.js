import { html } from "xiome/x/toolbox/hamster-html/html.js";
export function redirect(destination) {
    return () => (html `

		<!doctype html>

		<meta
			http-equiv="refresh"
			content="0;URL='${destination}'"
			/>

	`);
}
//# sourceMappingURL=redirect.js.map