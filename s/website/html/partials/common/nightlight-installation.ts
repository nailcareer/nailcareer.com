
import {read} from "../../../buildtools/reading-and-writing.js"
import {html, unsanitized} from "xiome/x/toolbox/hamster-html/html.js"

export function nightlightInstallation() {
	return html`
		<script>
			${read("node_modules/xiome/x/features/xio-components/nightlight/nightlight-early-activation.js")
				.then(unsanitized)}
		</script>
	`
}
