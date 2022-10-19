
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "community",
pageSubtitle: "Community Admin Centre",
mainHtml: html`

	<div data-community-page="admin">
		<div class="plate">
			<nav class="subnav">
				<a href="./">Welcome</a>
				<a href="./qa">Q&amp;A</a>
				<a data-tag="soon">Livestream</a>
				<a data-tag="soon">Premium</a>
			</nav>

			<h1>Admin Centre</h1>
			<div class="feature">
				<xiome-login-panel initially-hidden>
					<p slot="logged-out">Login to see administrative panels</p>

					<h2>Manage users</h2>
					<xiome-manage-users></xiome-manage-users>

					<h2>Customize permissions</h2>
					<xiome-permissions></xiome-permissions>
					<xiome-privileges></xiome-privileges>

					<h2>Video hosting</h2>
					<xiome-video-hosting></xiome-video-hosting>

					<h3>All video views registered in the system</h3>
					<xiome-video-views></xiome-video-views>

					<h2>Store management</h2>
					<xiome-store-connect></xiome-store-connect>
					<xiome-store-subscription-planning></xiome-store-subscription-planning>
				</xiome-login-panel>
			</div>
		</div>
	</div>

`})
