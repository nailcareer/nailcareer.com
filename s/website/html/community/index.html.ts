
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {CommunityPage, communitySubnav} from "../partials/community-subnav.html.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "community",
pageSubtitle: "Community",
mainHtml: html`

	<div data-community-page=welcome>
		<div class=plate>
			${communitySubnav(CommunityPage.Membership)}
			<div class=subs>
				<h1>Join Suzie's next event!</h1>
				<xiome-store-subscription-catalog></xiome-store-subscription-catalog>
				<xiome-store-customer-portal>
					Edit Billing Settings
				</xiome-store-customer-portal>
			</div>
		</div>
	</div>

`})
