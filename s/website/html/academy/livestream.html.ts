
import {html} from "xiome/x/toolbox/hamster-html/html.js"

import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {academySubnav} from "../../widgets/academy-subnav.js"

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "academy",
pageSubtitle: "Livestream",
mainHtml: html`

	<div data-academy-page=livestream>
		<div class=plate>
			${academySubnav("livestream")}

			<div class="live" data-chat="true">
				<div class="boxes">
					<div class="videobox">
						<xiome-video-display initially-hidden>
							<p slot="unavailable">livestream is currently unavailable.</p>
							<p slot="unprivileged">the livestream is either off, or your account doesn't have permission to view it.</p>
						</xiome-video-display>
					</div>
					<div class="chatbox">
						<xiome-video-companion initially-hidden>
							<xiome-chat></xiome-chat>
						</xiome-video-companion>
					</div>
				</div>
				<div class="controls"><button class="togglechat">Toggle Chat</button></div>
				<div class="helpboxes">
					<div class="help-stream">
						<h3>Welcome to Suzie's Livestream</h3>
						<p>Stay tuned for scheduling information.</p>
						<p>If you are having troubles getting the livestream working, please email <nce-email user="hello" domain="nailcareer.com"></nce-email>
						</p>
					</div>
					<div class="help-chat">
						<h3>How to participate in the live chat</h3>
						<ul>
							<li class="toggle">Press the "Toggle Chat" button</li>
							<li>Make sure you're logged in</li>
							<li>Type your message to Suzie and press Enter</li>
						</ul>
					</div>
				</div>
				<script>
					const live = document.querySelector(".live")
					const toggle = document.querySelector(".live .togglechat")
					toggle.onclick = () => {
						const isActive = live.getAttribute("data-chat") === "true"
						live.setAttribute("data-chat", isActive ?"false" :"true")
					}
				</script>
			</div>
		</div>
	</div>

`})
