
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

	<div data-community-page=questions>
		<div class=plate>
			<nav class=subnav>
				<a href="./">Welcome</a>
				<a href="./qa" data-marked>Q&amp;A</a>
				<a data-tag="soon">Livestream</a>
				<a data-tag="soon">Premium</a>
			</nav>
			<h1>Welcome to the NCE Community</h1>
			<h1>Suzie is ready to answer your questions!</h1>
			<div class=sidebyside>
				<div class=text>
					<p>Post and heart questions on the board below, and Suzie will answer her favourites in her upcoming youtube videos.</p>
				</div>
				<div class=image>
					<img src="/assets/images-medium/courses/suzie-event-02.jpg" alt=""/>
				</div>
			</div>
			<div class=feature>
					<xiome-login-panel>
						<p slot=logged-out>Login to heart and post questions</p>
					</xiome-login-panel>
					<xiome-questions></xiome-questions>
			</div>
		</div>
	</div>

`})
