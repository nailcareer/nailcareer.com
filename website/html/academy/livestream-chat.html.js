import { html } from "xiome/x/toolbox/hamster-html/html.js";
import minimalPageHtml from "../partials/minimal-page.html.js";
export default ({ base, mode, ...context }) => minimalPageHtml({
    ...context,
    base,
    mode,
    pageName: "academy",
    pageSubtitle: "Livechat",
    mainHtml: html `

	<div data-academy-page=livestream-chat>
		<div class=plate>
			<xiome-chat></xiome-chat>
		</div>
	</div>

`
});
//# sourceMappingURL=livestream-chat.html.js.map