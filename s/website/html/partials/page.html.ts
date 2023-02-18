
import {NceWebsiteContext} from "../../types.js"
import {read} from "../../buildtools/reading-and-writing.js"
import {html, HtmlTemplate, unsanitized} from "xiome/x/toolbox/hamster-html/html.js"
import {eventPromoUrl} from "../../constants.js"

export default ({v, mode, pageName, pageSubtitle, headHtml, mainHtml}: NceWebsiteContext & {
	pageName: string
	pageSubtitle?: string
	headHtml?: HtmlTemplate
	mainHtml: HtmlTemplate
}) => html`
<!doctype html>
<html>
<head>

	<meta charset="utf-8"/>
	<meta name=viewport content="width=device-width,initial-scale=1"/>
	<title>
		${pageSubtitle ? "NCE " + pageSubtitle : "Nail Career Education"}
	</title>

	<link rel=stylesheet href="${v(`/styles.css`)}"/>
	<link rel=icon type="image/jpeg" href="/assets/images/suzie.jpg"/>
	<link rel=preconnect href="https://fonts.googleapis.com"/>
	<link rel=preconnect href="https://fonts.gstatic.com" crossorigin/>
	<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"/>

	<shopper-config
		base-currency="usd"
		currencies="cad,usd,gbp,eur,aud"
		shopify-domain="nail-career-education.myshopify.com"
		shopify-storefront-access-token="493f6df6e7fb5bfc231bb9f221fecdee"
	></shopper-config>

	${mode === "debug"
		? html`
			<xiome-config
				app=ea296d14b6d75503a7d419da911c64c1a8d685c3cc6739d2483bccb3a6af973c
			></xiome-config>
			<script type=importmap-shim src="/importmap.json"></script>
			<script defer type=module-shim src="/main.js"></script>
			<script defer type=module-shim src="/node_modules/xiome/x/xiome.js"></script>
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
		`}

	<script>
		${read("node_modules/xiome/x/features/xio-components/nightlight/nightlight-early-activation.js")
			.then(unsanitized)}
	</script>

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
							<h3>your account</h3>
						</xiome-my-account>
					</xiome-login-panel>
				</xio-menu-item>
			</xio-menu>
		</div>
	</nce-header>

	<main>
		<ul class=infoboxes>
			<li data-vibe=promo data-side-by-side>
				<a href="${eventPromoUrl}">
					<div>
						<img alt="" src="/assets/graphics/promos/002-thumb3.webp"/>
					</div>
					<div>
						<p>New In-person Workshop!</p>
						<p>With <strong>Suzie</strong>, Featuring <strong>Jenny Bui</strong></p>
						<p>May 6-8, 2023, in Vancouver BC Canada</p>
						<button>Reserve your Seat</button>
					</div>
				</a>
			</li>
		</ul>
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
