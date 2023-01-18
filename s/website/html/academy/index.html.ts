
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "community",
pageSubtitle: "Community",
mainHtml: html`

	<div data-community-page=welcome>
		<div class=plate>
			<nav class=subnav>
				<a href="./" data-marked>Welcome</a>
				<a href="./qa">Q&amp;A</a>
				<a data-tag="soon">Livestream</a>
				<a data-tag="soon">Premium</a>
			</nav>
			<h1>Welcome to the NCE Community</h1>
			<div class=sidebyside>
				<div class=text>
					<p>Suzie's new community is in early-access, and you can be one of the first members to join.</p>
					<p>We're getting started with the <a href="./qa">Q&amp;A board</a> where you can submit your questions, and Suzie will answer her favourites in her videos!</p>
				</div>
				<div class=image>
					<img src="/assets/images-medium/courses/suzie-event-01.jpg" alt=""/>
				</div>
				<div class=feature>
					<xiome-login-panel initially-hidden>
						<div class=text slot=logged-out>
							<h3>Enter your email to login or create an account</h3>
						</div>
						<div class=text>
							<h3>You are logged in</h3>
							<p>You can customize your nickname and your tagline, which will appear wherever you post in the NCE Community</p>
						</div>
						<xiome-my-account></xiome-my-account>
						<div class="text nextstep">
							<p>Now go check out the <a href="./qa">Q&amp;A Board</a></p>
						</div>
					</xiome-login-panel>
				</div>
			</div>
		</div>
	</div>

`})
