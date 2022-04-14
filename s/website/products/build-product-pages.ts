
import {dirname} from "path"
import {mkdir} from "fs/promises"
import {minify} from "html-minifier-terser"

import {NceWebsiteInputs, Product} from "../types.js"
import {write} from "../buildtools/reading-and-writing.js"
import {getWebsiteContext} from "xiome/x/toolbox/hamster-html/website/utils/get-website-context.js"

import productPageHtml from "../html/partials/product-page.html.js"

export async function buildProductPages({mode, catalog}: NceWebsiteInputs) {

	const productList = <[string, Product][]>
		Object.entries(catalog)
			.flatMap(([,categoryData]) => Object.entries(categoryData.products))
			.filter(([,product]) => !product["special-partnership"])

	for (const [name, product] of productList) {
		if (!product.carousel) console.error("NO PRODUCT", name, product)
	}

	const pages = await Promise.all(
		productList.map(async([pageName, product]) => {
			const context = getWebsiteContext({
				sourcePath: `x/store/products/${pageName}`,
				inputDirectory: "x",
				outputDirectory: "x",
			})
			const html = await productPageHtml({
				...context,
				imagesDirectory: "/assets/images-large",
				mode,
				catalog,
				product,
			}).render()
			const htmlMini = await minify(html, {
				collapseBooleanAttributes: true,
				minifyCSS: true,
				minifyJS: true,
				removeComments: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
			})
			return {name: pageName, html: htmlMini}
		})
	)

	await Promise.all(pages.map(async page => {
		const pageName = page.name.endsWith("/")
			? page.name + "index"
			: page.name
		const path = `x/store/products/${pageName}.html`
		await mkdir(dirname(path), {recursive: true})
		await write(path, page.html)
		console.log("write product", path)
	}))
}
