
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {HashVersioner} from "xiome/x/toolbox/hamster-html/versioning/hash-versioner.js"

export function xiomeInstallation(v: HashVersioner, mode: string) {
	return (mode === "debug")

		? html`
			<xiome-mock mode=app root="/node_modules/xiome/x"></xiome-mock>
			<script type=importmap-shim src="/importmap.json"></script>
			<script defer type=module-shim src="/main.js"></script>
			<script defer type=module-shim src="/node_modules/xiome/x/xiome-mock.js"></script>
			<script defer src="/node_modules/es-module-shims/dist/es-module-shims.js"></script>
		`

		: html`
			<xiome-config
				app=ea296d14b6d75503a7d419da911c64c1a8d685c3cc6739d2483bccb3a6af973c
			></xiome-config>
			<script defer src="/node_modules/@babel/polyfill/dist/polyfill.min.js"></script>
			<script defer src="/node_modules/whatwg-fetch/dist/fetch.umd.js"></script>
			<script defer src="/node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js"></script>
			<script defer src="${v("/main.bundle.min.js")}"></script>
			<script defer src="${v("/node_modules/xiome/x/xiome.bundle.min.js")}"></script>
	`
}
