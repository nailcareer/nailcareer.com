
import {NceWebsiteContext} from "./types.js"
import {buildWebsite} from "xiome/x/toolbox/hamster-html/website/build-website.js"
import {hashVersioner} from "xiome/x/toolbox/hamster-html/versioning/hash-versioner.js"

const mode = <NceWebsiteContext["mode"]>process.argv[2]
if (!mode) {
	console.error(`website build requires argument "mode"`)
	process.exit(-1)
}

await buildWebsite<NceWebsiteContext>({
	inputDirectory: "x/website/html",
	outputDirectory: "x",
	excludes: ["partials/**/*"],
	logWrittenFile: path => console.log(path),
	context: {
		mode,
		v: hashVersioner({root: "x"}),
	},
})
