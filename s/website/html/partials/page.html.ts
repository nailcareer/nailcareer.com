
import {NceWebsiteContext} from "../../types.js"
import {read} from "../../buildtools/reading-and-writing.js"
import {html, HtmlTemplate, unsanitized} from "xiome/x/toolbox/hamster-html/html.js"

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
					<shopper-cart slot=panel require-terms-checked>
						<div slot=before-checkout>
							<p class=note>Prices on final checkout page are shown in US Dollars.</p>
							<p class=note>Shipping is currently only available within North America.</p>
							<p class=terms><strong>Terms:</strong> Professional use only.</p>
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
		${mainHtml}
	</main>

	<nce-footer></nce-footer>

</body>
</html>
`
