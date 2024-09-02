
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {academySubnav} from "../../widgets/academy-subnav.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "academy",
pageSubtitle: "Q&A",
mainHtml: html`

	<div data-academy-page=qa>
		<div class=plate>
			${academySubnav("qa")}

			<!-- <h1>Suzie is ready to answer your questions!</h1>
			<div class=sidebyside>
				<div class=text>
					<p>Post and heart questions on the board below, and Suzie will answer her favourites in her upcoming youtube videos.</p>
				</div>
				<div class=image>
					<img src="/assets/images-medium/courses/suzie-event-02.jpg" alt=""/>
				</div>
			</div> -->

			<div class=feature>
					<xiome-login-panel>
						<p slot=logged-out>Login to post questions</p>
					</xiome-login-panel>
					<xiome-questions></xiome-questions>
			</div>
		</div>
	</div>

`})
