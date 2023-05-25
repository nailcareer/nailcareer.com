
import {html, HtmlTemplate} from "xiome/x/toolbox/hamster-html/html.js"

import {NceWebsiteContext} from "../../types.js"
import {metaAndTitle} from "./common/meta-and-title.js"
import {shopperConfig} from "./common/shopper-config.js"
import {stylesAndFavicon} from "./common/styles-and-favicon.js"
import {xiomeInstallation} from "./common/xiome-installation.js"
import {nightlightInstallation} from "./common/nightlight-installation.js"

export default ({v, mode, pageName, pageSubtitle, headHtml, mainHtml}: NceWebsiteContext & {
	pageName: string
	pageSubtitle?: string
	headHtml?: HtmlTemplate
	mainHtml: HtmlTemplate
}) => html`
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

	<nce-header current-page="${pageName}" initially-hidden>
		<div class=menuarea>
			<xio-menu sticky initially-hidden>
				<xio-menu-item>
					<xio-nightlight data-label=nightlight></xio-nightlight>
				</xio-menu-item>
				<xio-menu-item data-label=shopper>
					<shopper-button></shopper-button>
					<shopper-cart slot=panel require-terms-checked checkout-in-same-window>
						<div slot=before-checkout>
							<h4>Terms</h4>
							<details>
								<summary>Click to see shipping details.</summary>
								<div>
									<p>Duty fees may apply.</p>
									<p>Orders are usually processed within five business days.</p>
									<p>International shipping is available to the following countries:</p>
									<ul class=countries>
										<li>Australia</li>
										<li>Belgium</li>
										<li>Canada</li>
										<li>Denmark</li>
										<li>Finland</li>
										<li>France</li>
										<li>Germany</li>
										<li>Iceland</li>
										<li>Ireland</li>
										<li>Isle of Man</li>
										<li>Italy</li>
										<li>Mexico</li>
										<li>Netherlands</li>
										<li>New Zealand</li>
										<li>Poland</li>
										<li>Portugal</li>
										<li>Spain</li>
										<li>Sweden</li>
										<li>Switzerland</li>
										<li>United Kingdom</li>
										<li>United States</li>
									</ul>
									<p>Email <nce-email user="hello" domain="nailcareer.com"></nce-email> if your country is not on this list, or if you'd like to arrange local pickup in Langford BC, Canada.</p>
								</div>
							</details>
							<p>Prices on the next checkout page are shown in US Dollars.</p>
							<p>Products are for professional use only.</p>
						</div>
					</shopper-cart>
				</xio-menu-item>
				<xio-menu-item data-label="account">
					<xiome-my-avatar></xiome-my-avatar>
					<xiome-login-panel slot=panel show-logout>
						<p slot=logged-out>Enter your email to login or create an account</p>
						<xiome-my-account>
							<hr/>
							<xiome-store-subscription-status></xiome-store-subscription-status>
							<xiome-store-billing-area></xiome-store-billing-area>
						</xiome-my-account>
					</xiome-login-panel>
				</xio-menu-item>
			</xio-menu>
		</div>
	</nce-header>

	<main>
		${mainHtml}
	</main>

	<nce-footer></nce-footer>

</body>
</html>
`

// <ul class=infoboxes>
// 	<li data-vibe=black-friday>
// 		<a href="/store">
// 			<p>BLACK FRIDAY SALE</p>
// 			<p>
// 				<strong>25% OFF</strong>
// 				<em>Select items, while supplies last</em>
// 			</p>
// 		</a>
// 	</li>
// </ul>

// <ul class=infoboxes>
// 	<li data-vibe=promo data-side-by-side>
// 		<a href="${eventPromoUrl}">
// 			<div>
// 				<img alt="" src="/assets/graphics/promos/002-thumb3.webp"/>
// 			</div>
// 			<div>
// 				<p>New In-person Workshop!</p>
// 				<p>With <strong>Suzie</strong>, and special guest <strong>Jenny Bui</strong></p>
// 				<p>May 6-8, 2023, in Vancouver BC Canada</p>
// 				<button>Reserve your Seat</button>
// 			</div>
// 		</a>
// 	</li>
// </ul>

