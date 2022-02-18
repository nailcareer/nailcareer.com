
import {dirname} from "path"
import {mkdir} from "fs/promises"
import {minify} from "html-minifier-terser"

import {NceWebsiteContext} from "../types.js"
import {loadProductData} from "./load-product-data.js"
import {write} from "../buildtools/reading-and-writing.js"
import {getWebsiteContext} from "xiome/x/toolbox/hamster-html/website/utils/get-website-context.js"

import productPageHtml from "../html/partials/product-page.html.js"

export async function buildProductPages({mode, productDataPath}: {
		mode: NceWebsiteContext["mode"]
		productDataPath: string
	}) {

	const products = await loadProductData(productDataPath)

	const pages = await Promise.all(
		products.map(async product => {
			const context = getWebsiteContext({
				sourcePath: `x/store/products/${product.name}`,
				inputDirectory: "x",
				outputDirectory: "x",
			})
			const html = await productPageHtml({
				...context,
				imagesDirectory: "/assets/images-medium",
				mode,
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
			return {name: product.name, html: htmlMini}
		})
	)

	await Promise.all(pages.map(async page => {
		const path = `x/store/products/${page.name}.html`
		await mkdir(dirname(path), {recursive: true})
		await write(path, page.html)
		console.log("write product", path)
	}))
}
