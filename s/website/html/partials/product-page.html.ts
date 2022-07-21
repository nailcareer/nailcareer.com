
import pageHtml from "../partials/page.html.js"
import {Product, NceWebsiteContext} from "../../types.js"
import {html, attrMaybe, attrBool, maybe, unsanitized} from "xiome/x/toolbox/hamster-html/html.js"

import MarkdownIt from "markdown-it"

const markdown = (() => {
	const markdown = MarkdownIt({
		html: true,
		xhtmlOut: false,
		breaks: false,
		linkify: true,
		typographer: true,
		quotes: '“”‘’',
	})
	return (md: string) => markdown.render(md)
})()

export default ({
	product: {title, product, carousel, writeup, writeupMarkdown, details},
	imagesDirectory,
	...context
}: NceWebsiteContext & {
	product: Product
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
			${attrBool("restocking-soon", product.restockingSoon)}
			${attrBool("data-new", product.isNew)}
		></shopper-product>
		<small class=disclaimers>
			<p>Note: depending on your location, your order may be subject to international duty fees</p>
		</small>
		${writeup
			? html`
				<div class=writeup>
					${unsanitized(writeup)}
				</div>`
			: undefined}
		${writeupMarkdown
			? html`
				<div class=writeup>
					${unsanitized(markdown(writeupMarkdown))}
				</div>`
			: undefined}
		${maybe(details, () => html`
			<div class=details>
				${unsanitized(details)}
			</div>
		`)}
	</div>
</div>

`})
