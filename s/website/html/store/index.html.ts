
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext} from "../../types.js"
import {html} from "xiome/x/toolbox/hamster-html/html.js"

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
			<shopper-product restocking-soon show-image href="/store/products/jewel-dappen-dish" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNTQ2ODkwNjA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/pumpkin-nail-display" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODIxNzExNzI="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/nail-bar-blue" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODQ3MjcwNzY="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/nail-bar-pink" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODUxMjAyOTI="></shopper-product>
			<shopper-product show-image href="/store/products/apron" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzE1MDI3MDAyMDgxNjQ="></shopper-product>
		</div>

		<h2 id=acrylic>Acrylic</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/mini-acrylic" link="6748201943076"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/acrylic-1oz/worlds-best-bo" link="6944669892644"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/acrylic-1oz/fold-in-the-che" link="6944671072292"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/acrylic-1oz/boom-roas" link="6944671531044"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/acrylic-1oz/ewwwww-dav" link="6944672481316"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/acrylic-1oz/best-wishes-warmest-rega" link="6944672776228"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/acrylic-powder-collection-of-four" link="https://nail-career-education.myshopify.com/admin/products/6659820388388"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/acrylic-powder-2oz-soft-white" link="https://nail-career-education.myshopify.com/admin/products/6659823435812"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/acrylic-powder-2oz-foundation-pink" link="https://nail-career-education.myshopify.com/admin/products/6659824123940"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/acrylic-powder-2oz-pink-tint" link="https://nail-career-education.myshopify.com/admin/products/6659823796260"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/acrylic-powder-2oz-clear-cap" link="https://nail-career-education.myshopify.com/admin/products/6659825795108"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/prep-and-bond" link="6923953242148"></shopper-product>
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
			<shopper-product restocking-soon show-image href="/store/products/blue-duster" link="6814424137764"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/nail-art-brush-set" link="https://nail-career-education.myshopify.com/admin/products/6696149254180"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/rose-gold-brush-kit" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNDg3NTgwNTI="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/pride-brushes" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY2MjAxNjI2MjE0NzY="></shopper-product>
		</div>

		<h2 id=files-and-forms>Files &amp; Forms</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/french-cut-bit" link="6923935088676"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/bit-kit" link="6767534768164"></shopper-product>
			<shopper-product data-notice="UK SHIPPING UNAVAILABLE" restocking-soon show-image href="/store/products/ezfile" link="6748213674020"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-5" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQzOTM2MDA2NDcyMDQ="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-fine" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODU4MDg0MjA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-medium" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODY4ODk3NjQ="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-coarse" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODc2MTA2NjA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-sanding-sponge" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODg1OTM3MDA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/files-smooth-and-shine" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTMxODc2NDM0Mjg="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/button-forms" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1NzYzNTI3MjI5ODA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/button-forms-500" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1Nzk0NDQxNTQ0MDQ="></shopper-product>
		</div>

		<h2 id=gel>Gel</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/ez-gel" link="6875102281764"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/mini-nuke" link="6875100250148"></shopper-product>
		</div>

		<h2 id=gel-tips>Gel Tips</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/quick-tips/square-medium" link="6767568224292"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/quick-tips" link="6669675003940"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/quick-tips/coffin-medium" link="6725898567716"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/quick-tips/stiletto-long" link="6725899059236"></shopper-product>
		</div>

		<h2 id=manicure>Manicure</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/oil/gingerbread-cookies" link="6848650739748"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/manicure-kit" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY1OTQ0MDE5OTI3NDA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/cuticle-oil" uid="Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzUwMzYyMjQ0NDY1MDA="></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/lets-get-sugar" link="https://nail-career-education.myshopify.com/admin/products/6696151711780"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/lets-get-hydrated" link="https://nail-career-education.myshopify.com/admin/products/6696154431524"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/peppermint-squeeze" link="https://nail-career-education.myshopify.com/admin/products/6696155938852"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/wooden-nail-brush" link="https://nail-career-education.myshopify.com/admin/products/6696161673252"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/nce-towel" link="https://nail-career-education.myshopify.com/admin/products/6696160362532"></shopper-product>
		</div>

		<h2 id=nail-art>Nail Art</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/jem-jab" link="6875095040036"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/caviar/bright-gold" link="6944660652068"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/caviar/pewter" link="6944659734564"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/caviar/pearl" link="6944660488228"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/twinkle-sprinkle" link="6875089403940"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/gem-catcher" link="6875099463716"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/silvery-gems" link="6875102871588"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/golden-gems" link="6944658784292"></shopper-product>
			<shopper-product data-new restocking-soon show-image href="/store/products/rainbow-crystals" link="6944657506340"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/ice-crystals" link="6875103199268"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/all-six-colors" link="6859170218020"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/blue-green" link="6856054308900"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/blue-hues" link="6856055717924"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/blue-ice" link="6855999914020"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/emerald-green" link="6856057618468"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/pink-gold" link="6856058404900"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/3d-diamond-shapes/red-gold" link="6856062173220"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/gem-jars/frosted-white-glitter" link="6839712841764"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/foils/gold" link="6828675137572"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/foils/silver" link="6828676612132"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/foils/gold-and-copper" link="6828678971428"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/foils/gold-and-green" link="6828677595172"></shopper-product>
		</div>

		<h2 id=polish>Polish</h2>
		<div class=productgrid>
			<shopper-product restocking-soon show-image href="/store/products/reveal-top-coat" link="6875101528100"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/collection" link="6728291483684"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/1" link="6725867765796"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/2" link="6725869535268"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/3" link="6725869928484"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/4" link="6725872812068"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/5" link="6725873893412"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/6" link="6725875761188"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/7" link="6725878644772"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/8" link="6725879660580"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/9" link="6725880152100"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/10" link="6725880250404"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/11" link="6725880709156"></shopper-product>
			<shopper-product restocking-soon show-image href="/store/products/polish/reflection/12" link="6725881528356"></shopper-product>
		</div>
	</div>

`})