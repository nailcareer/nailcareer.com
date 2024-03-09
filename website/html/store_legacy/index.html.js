import pageHtml from "../partials/page.html.js";
import { attrBool, attrMaybe, html } from "xiome/x/toolbox/hamster-html/html.js";
// <li data-vibe=ordinary>🎁 Free gift included with orders over $250 USD!</li>
export default ({ base, mode, ...context }) => pageHtml({
    ...context,
    base,
    mode,
    pageName: "store",
    pageSubtitle: "Store",
    mainHtml: html `

	<div class=plate>
		${renderCatalogNavigation(context.catalog)}
	</div>

	<div class=productarea>
		${renderCatalog(context.catalog)}
	</div>

`
});
function renderCatalogNavigation(catalog) {
    return html `
		<nav class=subnav>
			${Object.entries(catalog)
        .filter(([name]) => name !== "_uncategorized")
        .map(([name, category]) => html `
					<a href="#${name}">
						${category.label}
					</a>
				`)}
		</nav>
	`;
}
function renderCatalog(catalog) {
    return Object.entries(catalog)
        .filter(([name]) => name !== "_uncategorized")
        .map(([name, category]) => renderCategory(name, category));
}
function renderCategory(name, category) {
    return html `
		<h2 id="${name}">${category.label}</h2>
		<div class=productgrid>
			${Object.entries(category.products).map(([name, product]) => product["special-partnership"]
        ? renderSpecialPartnership(name, product)
        : renderProduct(name, product))}
		</div>
	`;
}
function renderProduct(name, { hideFromIndex, product: { shopify, shopifyUid, isNew, restockingSoon, notice, }, }) {
    return hideFromIndex ? "" : html `
		<shopper-product
			show-image
			image-size="260"
			${attrBool("restocking-soon", restockingSoon)}
			${attrBool("data-new", isNew)}
			${attrMaybe("data-notice", notice)}
			href="/store/products/${name}"
			${shopify
        ? html `link="${shopify}"`
        : html `uid="${shopifyUid}"`}
		></shopper-product>
	`;
}
function renderSpecialPartnership(name, { "special-partnership": { title, note, link, linkTarget, bubble, button, discount, image, } }) {
    return html `
		<a class=special target="${linkTarget}" href="${link}">
			<div class=imagebox>
				<p class=note>${note}</p>
				<img src="/assets/images-small/${image}" alt=""/>
			</div>
			<div class=detailbox>
				<p class=producttitle>${title}</p>
				<p class=bubble>${bubble}</p>
			</div>
			<div class=actionbox>
				${discount ? html `
					<p class=productcode>
						Use discount code <code>${discount.code}</code>
						for ${Math.round(discount.percentOff)}% off!
					</p>
				` : undefined}
				<p class=productbutton>${button}</p>
			</div>
		</a>
	`;
}
//# sourceMappingURL=index.html.js.map