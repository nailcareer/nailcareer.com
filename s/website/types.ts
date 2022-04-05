
import {WebsiteContext} from "xiome/x/toolbox/hamster-html/website/build-website-types.js"

export interface NceWebsiteContext extends WebsiteContext {
	mode: "debug" | "production"
}

export interface NceProduct {
	name: string
	title: string
	product: {
		shopify?: string
		shopifyUid?: string
		restockingSoon: boolean
	}
	carousel: {
		aspectRatio?: string
		images: string[]
	}
	writeup: string
	details?: string
}
