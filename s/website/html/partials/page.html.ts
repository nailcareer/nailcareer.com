
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

	<sheep-modal></sheep-modal>

	<nce-header current-page="${pageName}" initially-hidden>
		<div class=menuarea>
			<xio-menu sticky initially-hidden>
				<xio-menu-item>
					<xio-nightlight data-label=nightlight></xio-nightlight>
				</xio-menu-item>
				<xio-menu-item data-label=shopper>
					<sheep-cart-button></sheep-cart-button>
					<sheep-cart slot=panel require-checkout-terms>
						<div slot=terms>
							<h4>Terms</h4>
							<!-- <p>⚠ Shipping is temporarily on hold from September 9th to 24th (2024).</p> -->
							<p>Products are for professional use only.</p>
							<p><strong>Duty Fees may apply (outside Canada).</strong></p>
							<details>
								<summary>Click to see shipping details.</summary>
								<div>
									<p>Orders are usually processed within five business days.</p>
									<p>International shipping is available to the following countries:</p>
									<p>When you receive your order, you may be charged duty fees if you are outside Canada, depending on your local tax laws.</p>
									<ul class=countries>
										<li>Australia</li>
										<li>Austria</li>
										<li>Belgium</li>
										<li>Canada</li>
										<li>Croatia</li>
										<li>Cyprus</li>
										<li>Czechia</li>
										<li>Denmark</li>
										<li>Finland</li>
										<li>France</li>
										<li>Germany</li>
										<li>Greece</li>
										<li>Hungary</li>
										<li>Iceland</li>
										<li>India</li>
										<li>Ireland</li>
										<li>Isle of Man</li>
										<li>Israel</li>
										<li>Italy</li>
										<li>Latvia</li>
										<li>Mexico</li>
										<li>Namibia</li>
										<li>Netherlands</li>
										<li>New Zealand</li>
										<li>North Macedonia</li>
										<li>Poland</li>
										<li>Portugal</li>
										<li>Romania</li>
										<li>Seychelles</li>
										<li>Slovenia</li>
										<li>South Africa</li>
										<li>Spain</li>
										<li>Sweden</li>
										<li>Switzerland</li>
										<li>United Arab Emirates</li>
										<li>United Kingdom</li>
										<li>United States</li>
									</ul>
									<p>Email <nce-email user="hello" domain="nailcareer.com"></nce-email> if your country is not on this list, or if you'd like to arrange local pickup in Langford BC, Canada.</p>
								</div>
							</details>
						</div>
					</sheep-cart>
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

	<div class=promobox>
		<a target=_blank href="https://www.eventbrite.ca/e/suzies-3-day-nail-workshop-tickets-950049853687">
			<img alt="Suzie's Nail Workshop" src="/assets/graphics/promos/009.jpg"/>
		</a>
	</div>

	<main>
		${mainHtml}
	</main>

	<nce-footer></nce-footer>

</body>
</html>
`

// // EVENTBRITE PROMO
// <div class=promobox>
// 	<a target=_blank href="https://www.eventbrite.ca/e/suzies-3-day-nail-workshop-tickets-753527580277?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl">
// 		<img alt="Suzie's Nail Workshop" src="/assets/graphics/promos/007.webp"/>
// 	</a>
// </div>

// // belongs in a <div class=promobox>
// <a href="/store/#/collection/featured/273763270692">
// 	<img alt="Black Friday Sale" src="/assets/graphics/promos/008.webp"/>
// </a>

// <aside class=promo4>
// 	<a
// 		class=card
// 		target="_blank"
// 		href="https://www.eventbrite.ca/e/660636390227">
// 		<img alt="" src="/assets/graphics/promos/003.webp"/>
// 		<div>
// 			<p>Suzie's 3-Day Workshop</p>
// 			<p>Sept 30 to Oct 2 '23, Victoria BC Canada</p>
// 			<p>Choose Your Education &amp; Price</p>
// 			<button>Reserve Your Seat</button>
// 		</div>
// 	</a>
// </aside>

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

