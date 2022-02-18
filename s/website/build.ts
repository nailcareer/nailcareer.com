
import {mkdir} from "fs/promises"
import {dirname} from "path"
import {minify} from "html-minifier-terser"
import {buildWebsite} from "xiome/x/toolbox/hamster-html/website/build-website.js"
import {getWebsiteContext} from "xiome/x/toolbox/hamster-html/website/utils/get-website-context.js"

import {NceWebsiteContext} from "./types.js"
import {write} from "./buildtools/reading-and-writing.js"
import {loadProductData} from "./buildtools/load-product-data.js"
import productPageHtml from "./html/partials/product-page.html.js"

const mode = <NceWebsiteContext["mode"]>process.argv[2]
if (!mode) {
	console.error(`website build requires argument "mode"`)
	process.exit(-1)
}

await buildWebsite<NceWebsiteContext>({
	inputDirectory: "x/website/html",
	outputDirectory: "x",
	excludes: ["partials/**/*"],
	logWrittenFile: path => console.log("write", path),
	context: {
		mode,
	},
})

const products = await loadProductData("s/website/product-data.yaml")

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

console.log("website done")
