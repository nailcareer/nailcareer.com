
import {HashVersioner} from "xiome/x/toolbox/hamster-html/versioning/hash-versioner.js"
import {WebsiteContext} from "xiome/x/toolbox/hamster-html/website/build-website-types.js"

export interface NceWebsiteContext extends WebsiteContext {
	mode: "debug" | "production"
	v: HashVersioner
}
