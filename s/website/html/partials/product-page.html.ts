

import pageHtml from "../partials/page.html.js"
import {NceProduct, NceWebsiteContext} from "../../types.js"
import {html, attrMaybe, attrBool, maybe, unsanitized} from "xiome/x/toolbox/hamster-html/html.js"

export default ({
	product: {title, product, carousel, writeup, details},
	imagesDirectory,
	...context
}: NceWebsiteContext & {
	product: NceProduct
	imagesDirectory: string
}) => pageHtml({
...context,
pageName: "store",
pageSubtitle: title,
mainHtml: html`

<div class=area>
	<div class=visual>
		<carouse-carousel
			${attrMaybe("data-aspect", carousel.aspectRatio)}
			${attrBool("arrows", carousel.images.length > 1)}
			${attrBool("dots", carousel.images.length > 1)}
			${attrBool("loop", carousel.images.length > 1)}
			hidden>
				${carousel.images.map(src => html`
					<figure><img alt="" src="${imagesDirectory}/${src}"/></figure>
				`)}
		</carouse-carousel>
	</div>
	<div class=product>
		<shopper-product
			${attrMaybe("link", product.shopify)}
			${attrMaybe("uid", product.shopifyUid)}
		></shopper-product>
		<small class=disclaimers>
			<p>Note: depending on your location, your order may be subject to international duty fees</p>
		</small>
		<div class=writeup>
			${unsanitized(writeup)}
		</div>
		${maybe(details, () => html`
			<div class=details>
				${unsanitized(details)}
			</div>
		`)}
	</div>
</div>

`})
