
import {NceWebsiteContext} from "../types.js"
import pageHtml from "./partials/page.html.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default (context: NceWebsiteContext) => pageHtml({
...context,
pageName: "home",
mainHtml: html`

<div class="homie">
	<h1>Nail Career Education</h1>
	<div class="showcase">
		<div class="one"><img src="/assets/images-medium/suzie/suzie-with-coffee.jpg" alt="" /></div>
		<div class="sidebox">
			<figure><img src="/assets/images-medium/products/ice-crystals/xmas-icicles-02.jpg" alt="" />
				<figcaption><a target="_blank" href="https://www.youtube.com/watch?v=_D7uDG1TO18">See Suzie's video for this design</a></figcaption>
			</figure>
		</div>
	</div>
</div>
<div class="homegrid"><img class="bg" src="/assets/images-medium/suzie/nail-table-cropped.jpg" alt="" />
	<div class="gridbox-alpha youtube">
		<div class="image"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<rect x="3" y="5" width="18" height="14" rx="4" />
				<path d="M10 9l5 3l-5 3z" />
			</svg></div>
		<div class="slate">
			<h2><a target="_blank" href="https://www.youtube.com/channel/UCTldDNXS4GeChcmwm55mXYQ">YouTube Channel</a></h2>
			<p>Suzie hosts the popular YouTube Channel <strong>Nail Career Education</strong>, which has more than 2.5 million subscribers!</p>
		</div>
	</div>
	<div class="gridbox-alpha questions">
		<div class="image"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-messages" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" />
				<path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
				<path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
			</svg></div>
		<div class="slate">
			<h2><a href="./community/qa">New Community Q&amp;A</a></h2>
			<p>Join the NCE Community to submit your questions, and Suzie will answer her favourites in her videos.</p>
		</div>
	</div>
	<shopper-product class="gridbox-alpha" data-new restocking-soon show-image href="/store/products/ez-gel" link="6875102281764"></shopper-product>
	<div class="gridbox-socials">
		<h2>Follow Suzie</h2>
		<div class="social-icons"><a class="instagram" target="_blank" title="Suzie's Instagram" href="https://www.instagram.com/nailcareereducation/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<rect x="4" y="4" width="16" height="16" rx="4" />
					<circle cx="12" cy="12" r="3" />
					<line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
				</svg><span>Instagram</span></a><a class="tiktok" target="_blank" title="Suzie's TikTok" href="https://www.tiktok.com/@nailcareer.education"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-tiktok" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
				</svg><span>TikTok</span></a><a class="facebook" target="_blank" title="Suzie's Facebook" href="https://www.facebook.com/NailCareerEducation/"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" />
					<path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
				</svg><span>Facebook</span></a></div>
	</div>
</div><a class="banner worksheet" target="_blank" href="/worksheet"><img src="/assets/images/worksheet-thumbnail.jpg" />
	<p>Suzie's Printable Worksheet</p>
</a>
<div class="intro">
	<h2>Nail Career Education is one of the top nail channels on YouTube.</h2>
	<p><strong>Hosted by Suzie and entrusted by 2.5 million subscribers.</strong></p>
	<p>Beginning in 2015, Nail Career Education grew its following with Suzie teaching nail tips, one video tutorial at a time. Today, NCE is one of the top trusted nail care sources worldwide and has spawned its own product line.</p>
	<p>From nail pros to hobbyists, formally educated to self taught: Nail lovers everywhere have found Suzie and her videos and have created the NCE Community.</p>
</div>

`})
