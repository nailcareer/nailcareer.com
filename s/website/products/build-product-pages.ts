
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
			return {
				name: pageName,
				html: htmlMini,
				redirects: product.redirects ?? [],
			}
		})
	)

	async function writePage(pageName: string, text: string) {
		pageName = pageName.endsWith("/")
			? pageName + "index"
			: pageName
		const path = `x/store/products/${pageName}.html`
		await mkdir(dirname(path), {recursive: true})
		await write(path, text)
		return path
	}

	await Promise.all(pages.map(async page => {

		const pagePath = await writePage(page.name, page.html)
		console.log("write page", pagePath)

		for (const redirect of page.redirects) {
			const destinationUrl = `/store/products/${page.name}`
			const redirectPath = await writePage(
				redirect,
				`<meta http-equiv="refresh" content="0;URL='${destinationUrl}'" />`
			)
			console.log("write redirect", redirectPath)
		}
	}))
}
