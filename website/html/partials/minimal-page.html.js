import { html } from "xiome/x/toolbox/hamster-html/html.js";
import { metaAndTitle } from "./common/meta-and-title.js";
import { shopperConfig } from "./common/shopper-config.js";
import { xiomeInstallation } from "./common/xiome-installation.js";
import { stylesAndFavicon } from "./common/styles-and-favicon.js";
import { nightlightInstallation } from "./common/nightlight-installation.js";
export default ({ v, mode, pageName, pageSubtitle, headHtml, mainHtml, }) => html `
<!doctype html>
<html>
<head>
	${metaAndTitle(pageSubtitle)}
	${stylesAndFavicon(v)}
	${shopperConfig()}
	${xiomeInstallation(v, mode)}
	${nightlightInstallation()}
	${headHtml}
</head>
<body data-page="${pageName}">

	<main>
		${mainHtml}
	</main>

</body>
</html>
`;
//# sourceMappingURL=minimal-page.html.js.map