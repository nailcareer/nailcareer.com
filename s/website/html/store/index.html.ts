
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

function product(
		page: string,
		product: {link: string} | {uid: string},
		{notice, isNew = false, restockingSoon = false}: {
			isNew?: boolean
			restockingSoon?: boolean
			notice?: string
		} = {},
	) {
	return html`
		<shopper-product
			show-image
			image-size="260"
			${restockingSoon ?"restocking-soon" :""}
			${isNew ?"data-new" :""}
			${notice ?html`data-notice="${notice}"` :""}
			href="/store/products/${page}"
			${(<any>product).link
				? html`link="${(<any>product).link}"`
				: html`uid="${(<any>product).uid}"`}
		></shopper-product>
	`
}

const isNew = true
const restockingSoon = true

export default ({base, mode, ...context}: NceWebsiteContext) => pageHtml({
...context,
base,
mode,
pageName: "store",
pageSubtitle: "Store",
mainHtml: html`

	<div class=plate>
		<nav class=subnav>
			<a href="#accessories">Accessories</a>
			<a href="#acrylic">Acrylic</a>
			<a href="#brushes">Brushes</a>
			<a href="#files-and-forms">Files &amp; Forms</a>
			<a href="#gel">Gel</a>
			<a href="#gel-tips">Gel Tips</a>
			<a href="#manicure">Manicure</a>
			<a href="#nail-art">Nail Art</a>
			<a href="#polish">Polish</a>
		</nav>
	</div>

	<div class=productarea>
		<h2 id=accessories>Accessories</h2>
		<div class=productgrid>
			${product("glass-dispenser", {link: "6990856716324"}, {restockingSoon, isNew})}
			${product("tweezers", {link: "6990874902564"}, {restockingSoon, isNew})}
			${product("scissors", {link: "6990882045988"}, {restockingSoon, isNew})}
			${product("blue-cotton-napkins", {link: "6965501755428"}, {restockingSoon})}
			${product("jewel-dappen-dish", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNTQ2ODkwNjA="}, {restockingSoon})}
			${product("pumpkin-nail-display", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODIxNzExNzI="}, {restockingSoon})}
			${product("nail-bar-blue", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODQ3MjcwNzY="}, {restockingSoon})}
			${product("nail-bar-pink", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODUxMjAyOTI="}, {restockingSoon})}
		</div>

		<h2 id=acrylic>Acrylic</h2>
		<div class=productgrid>
			${product("acrylic-powder-refill-foundation-pink", {link: "6971278393380"}, {restockingSoon})}
			${product("acrylic-powder-refill-pink-tint", {link: "6971278458916"}, {restockingSoon})}
			${product("acrylic-powder-refill-soft-white", {link: "6971279310884"}, {restockingSoon})}
			${product("acrylic-powder-refill-clear-cap", {link: "6971280162852"}, {restockingSoon})}
			${product("mini-acrylic", {link: "6748201943076"}, {restockingSoon})}
			${product("acrylic-1oz/worlds-best-bo", {link: "6944669892644"}, {restockingSoon})}
			${product("acrylic-1oz/fold-in-the-che", {link: "6944671072292"}, {restockingSoon})}
			${product("acrylic-1oz/boom-roas", {link: "6944671531044"}, {restockingSoon})}
			${product("acrylic-1oz/ewwwww-dav", {link: "6944672481316"}, {restockingSoon})}
			${product("acrylic-1oz/best-wishes-warmest-rega", {link: "6944672776228"}, {restockingSoon})}
			${product("acrylic-powder-collection-of-four", {link: "6659820388388"}, {restockingSoon})}
			${product("acrylic-powder-2oz-soft-white", {link: "6659823435812"}, {restockingSoon})}
			${product("acrylic-powder-2oz-foundation-pink", {link: "6659824123940"}, {restockingSoon})}
			${product("acrylic-powder-2oz-pink-tint", {link: "6659823796260"}, {restockingSoon})}
			${product("acrylic-powder-2oz-clear-cap", {link: "6659825795108"}, {restockingSoon})}
			${product("prep-and-bond", {link: "6923953242148"}, {restockingSoon})}
			<a class=special target=joyamia href="https://joyamia.com/collections/suzies-collection/products/suzies-fast-acrylic-monomer">
				<div class=imagebox>
					<p class=note>Special Partnership</p>
					<img src="/assets/images-small/products/fast-acrylic/fast-acrylic-2.jpg" alt=""/>
				</div>
				<div class=detailbox>
					<p class=producttitle>Suzie’s Fast Acrylic Monomer</p>
					<p class=bubble>Fast-setting formula</p>
				</div>
				<div class=actionbox>
					<p class=productcode>Use discount code <code>SUZIE10</code> for 10% off!</p>
					<p class=productbutton>See on Joya Mia</p>
				</div>
			</a>
			<a class=special target=joyamia href="https://joyamia.com/collections/suzies-collection/products/suzies-clean-acrylic-monomer">
				<div class=imagebox>
					<p class=note>Special Partnership</p>
					<img src="/assets/images-small/products/clean-acrylic/cleanacrylic3.jpg" alt=""/>
				</div>
				<div class=detailbox>
					<p class=producttitle>Suzie’s Clean Acrylic Monomer</p>
					<p class=bubble>Low-odor formula</p>
				</div>
				<div class=actionbox>
					<p class=productcode>Use discount code <code>SUZIE10</code> for 10% off!</p>
					<p class=productbutton>See on Joya Mia</p>
				</div>
			</a>
		</div>

		<h2 id=brushes>Brushes</h2>
		<div class=productgrid>
			${product("gel-brush", {link: "6996610940964"}, {restockingSoon, isNew})}
			${product("blue-duster", {link: "6814424137764"}, {restockingSoon})}
			${product("nail-art-brush-set", {link: "6696149254180"}, {restockingSoon})}
			${product("rose-gold-brush-kit", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNDg3NTgwNTI="}, {restockingSoon})}
		</div>

		<h2 id=files-and-forms>Files &amp; Forms</h2>
		<div class=productgrid>
			${product("gold-trimmer-bit", {link: "6971277672484"}, {restockingSoon})}
			${product("french-cut-bit", {link: "6923935088676"}, {restockingSoon})}
			${product("bit-kit", {link: "6767534768164"}, {restockingSoon})}
			${product("ezfile", {link: "6748213674020"}, {restockingSoon, notice: "NORTH AMERICA ONLY"})}
			${product("files-5", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzOTM2MDA2NDcyMDQ="}, {restockingSoon})}
			${product("files-fine", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODU4MDg0MjA="}, {restockingSoon})}
			${product("files-medium", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODY4ODk3NjQ="}, {restockingSoon})}
			${product("files-coarse", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODc2MTA2NjA="}, {restockingSoon})}
			${product("files-sanding-sponge", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODg1OTM3MDA="}, {restockingSoon})}
			${product("files-smooth-and-shine", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODc2NDM0Mjg="}, {restockingSoon})}
			${product("button-forms", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNTI3MjI5ODA="}, {restockingSoon})}
			${product("button-forms-500", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1Nzk0NDQxNTQ0MDQ="}, {restockingSoon})}
		</div>

		<h2 id=gel>Gel</h2>
		<div class=productgrid>
			${product("glass-nails", {link: "6990850490404"}, {restockingSoon, isNew})}
			${product("ez-gel", {link: "6875102281764"}, {restockingSoon})}
			${product("ez-gel-pink-mix", {link: "6971281670180"}, {restockingSoon})}
			${product("ez-gel-midnight", {link: "6971282358308"}, {restockingSoon})}
			${product("ez-gel-soft-white", {link: "6971282948132"}, {restockingSoon})}
			${product("mini-nuke", {link: "6875100250148"}, {restockingSoon})}
			${product("bridge", {link: "6971280982052"}, {restockingSoon})}
			${product("reveal-top-coat", {link: "6875101528100"}, {restockingSoon})}
		</div>

		<h2 id=gel-tips>Gel Tips</h2>
		<div class=productgrid>
			${product("quick-tips/square-medium", {link: "6767568224292"}, {restockingSoon})}
			${product("quick-tips/", {link: "6669675003940"}, {restockingSoon})}
			${product("quick-tips/coffin-medium", {link: "6725898567716"}, {restockingSoon})}
			${product("quick-tips/stiletto-long", {link: "6725899059236"}, {restockingSoon})}
		</div>

		<h2 id=manicure>Manicure</h2>
		<div class=productgrid>
			${product("oil/gingerbread-cookies", {link: "6848650739748"}, {restockingSoon})}
			${product("cuticle-oil", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzUwMzYyMjQ0NDY1MDA="}, {restockingSoon})}
			${product("lets-get-sugar", {link: "6696151711780"}, {restockingSoon})}
			${product("lets-get-hydrated", {link: "6696154431524"}, {restockingSoon})}
			${product("peppermint-squeeze", {link: "6696155938852"}, {restockingSoon})}
			${product("wooden-nail-brush", {link: "6696161673252"}, {restockingSoon})}
			${product("nce-towel", {link: "6696160362532"}, {restockingSoon})}
			${product("manicure-kit", {uid: "Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTQ0MDE5OTI3NDA="})}
		</div>

		<h2 id=nail-art>Nail Art</h2>
		<div class=productgrid>
			${product("dried-flowers", {link: "6990867595300"}, {restockingSoon, isNew})}
			${product("jem-jab", {link: "6875095040036"}, {restockingSoon})}
			${product("caviar/bright-gold", {link: "6944660652068"}, {restockingSoon})}
			${product("caviar/pewter", {link: "6944659734564"}, {restockingSoon})}
			${product("caviar/pearl", {link: "6944660488228"}, {restockingSoon})}
			${product("twinkle-sprinkle", {link: "6875089403940"}, {restockingSoon})}
			${product("gem-catcher", {link: "6875099463716"}, {restockingSoon})}
			${product("silvery-gems", {link: "6875102871588"}, {restockingSoon})}
			${product("golden-gems", {link: "6944658784292"}, {restockingSoon})}
			${product("rainbow-crystals", {link: "6944657506340"}, {restockingSoon})}
			${product("ice-crystals", {link: "6875103199268"}, {restockingSoon})}
			${product("3d-diamond-shapes/all-six-colors", {link: "6859170218020"}, {restockingSoon})}
			${product("3d-diamond-shapes/blue-green", {link: "6856054308900"}, {restockingSoon})}
			${product("3d-diamond-shapes/blue-hues", {link: "6856055717924"}, {restockingSoon})}
			${product("3d-diamond-shapes/blue-ice", {link: "6855999914020"}, {restockingSoon})}
			${product("3d-diamond-shapes/emerald-green", {link: "6856057618468"}, {restockingSoon})}
			${product("3d-diamond-shapes/pink-gold", {link: "6856058404900"}, {restockingSoon})}
			${product("3d-diamond-shapes/red-gold", {link: "6856062173220"}, {restockingSoon})}
			${product("gem-jars/frosted-white-glitter", {link: "6839712841764"}, {restockingSoon})}
			${product("foils/gold", {link: "6828675137572"}, {restockingSoon})}
			${product("foils/silver", {link: "6828676612132"}, {restockingSoon})}
			${product("foils/gold-and-copper", {link: "6828678971428"}, {restockingSoon})}
			${product("foils/gold-and-green", {link: "6828677595172"}, {restockingSoon})}
		</div>

		<h2 id=polish>Polish</h2>
		<div class=productgrid>
			${product("polish/reflection/collection", {link: "6728291483684"}, {restockingSoon})}
			${product("polish/reflection/1", {link: "6725867765796"}, {restockingSoon})}
			${product("polish/reflection/2", {link: "6725869535268"}, {restockingSoon})}
			${product("polish/reflection/3", {link: "6725869928484"}, {restockingSoon})}
			${product("polish/reflection/4", {link: "6725872812068"}, {restockingSoon})}
			${product("polish/reflection/5", {link: "6725873893412"}, {restockingSoon})}
			${product("polish/reflection/6", {link: "6725875761188"}, {restockingSoon})}
			${product("polish/reflection/7", {link: "6725878644772"}, {restockingSoon})}
			${product("polish/reflection/8", {link: "6725879660580"}, {restockingSoon})}
			${product("polish/reflection/9", {link: "6725880152100"}, {restockingSoon})}
			${product("polish/reflection/10", {link: "6725880250404"}, {restockingSoon})}
			${product("polish/reflection/11", {link: "6725880709156"}, {restockingSoon})}
			${product("polish/reflection/12", {link: "6725881528356"}, {restockingSoon})}
		</div>
	</div>

`})
