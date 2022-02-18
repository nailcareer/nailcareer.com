
import {NceWebsiteContext} from "./types.js"
import {buildProductPages} from "./products/build-product-pages.js"
import {buildWebsite} from "xiome/x/toolbox/hamster-html/website/build-website.js"

const mode = <NceWebsiteContext["mode"]>process.argv[2]
if (!mode) {
	console.error(`website build requires argument "mode"`)
	process.exit(-1)
}

await Promise.all([

	buildWebsite<NceWebsiteContext>({
		inputDirectory: "x/website/html",
		outputDirectory: "x",
		excludes: ["partials/**/*"],
		logWrittenFile: path => console.log("write", path),
		context: {
			mode,
		},
	}),

	buildProductPages({
		mode,
		productDataPath: "s/website/product-data.yaml",
	}),
])

console.log("website done")
