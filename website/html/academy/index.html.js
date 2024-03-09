import { html } from "xiome/x/toolbox/hamster-html/html.js";
import pageHtml from "../partials/page.html.js";
import { academySubnav } from "../../widgets/academy-subnav.js";
export default ({ base, mode, ...context }) => pageHtml({
    ...context,
    base,
    mode,
    pageName: "academy",
    pageSubtitle: "Academy",
    mainHtml: html `

	<div data-academy-page=academy>
		<div class=plate>

			${academySubnav("academy")}

			<h1>Join Suzie's NCE Academy</h1>

			<div class=twosided>
				<div class=cell>
					<xiome-store-subscription-catalog></xiome-store-subscription-catalog>
				</div>
				<div class=cell>
					<ul>
						<li>Post questions for Suzie to answer on the <a href="./qa">Q&amp;A board</a></li>
						<li><span class=note_coming_soon>Coming Soon</span> Gain access to Suzie's monthly <a href="./livestream">Livestream</a></li>
					</ul>
				</div>
			</div>

			<img class=welcomeimage src="/assets/images-medium/courses/suzie-event-01.jpg" alt=""/>

		</div>
	</div>

`
});
//# sourceMappingURL=index.html.js.map