
import pageHtml from "../partials/page.html.js"
import {NceWebsiteContext, Product, ProductCatalog, ProductCategory, SpecialPartnership} from "../../types.js"
import {attrBool, attrMaybe, html} from "xiome/x/toolbox/hamster-html/html.js"

function renderCatalog(catalog: ProductCatalog) {
	return Object.entries(catalog)
		.filter(([name]) => name !== "_uncategorized")
		.map(([name, category]) => renderCategory(name, <ProductCategory>category))
}

function renderCategory(name: string, category: ProductCategory) {
	return html`
		<h2 id="${name}">${category.label}</h2>
		<div class=productgrid>
			${Object.entries(category.products).map(([name, product]) =>
				product["special-partnership"]
					? renderSpecialPartnership(name, <SpecialPartnership>product)
					: renderProduct(name, <Product>product)
			)}
		</div>
	`
}

function renderProduct(
		name: string,
		{
			title,
			product: {
				shopify,
				shopifyUid,
				isNew,
				restockingSoon,
				notice,
			},
			carousel: {
				images,
				aspectRatio,
			},
			writeup,
			details,
		}: Product,
	) {
	return html`
		<shopper-product
			show-image
			image-size="260"
			${attrBool("resotcking-soon", restockingSoon)}
			${attrBool("data-new", isNew)}
			${attrMaybe("data-notice", notice)}
			href="/store/products/${name}"
			${shopify
				? html`link="${shopify}"`
				: html`uid="${shopifyUid}"`}
		></shopper-product>
	`
}

function renderSpecialPartnership(
		name: string,
		{"special-partnership": {
			title,
			note,
			link,
			bubble,
			button,
			discount,
			image,
			percentOff,
		}}: SpecialPartnership,
	) {
	return html`
		<p>special: ${name} ${title}</p>
	`
}

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
			${Object.entries(context.catalog)
				.filter(([name, category]) => name !== "_uncategorized")
				.map(([name, category]: [string, ProductCategory]) => html`
					<a href="#${name}">
						${category.label}
					</a>
				`)}
		</nav>
	</div>

	<div class=productarea>
		${renderCatalog(context.catalog)}
	</div>

`})
