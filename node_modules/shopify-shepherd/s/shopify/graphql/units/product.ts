
import {gql} from "../../../tools/gql.js"
import {GqlEdges, edges} from "./edges.js"
import {defaults} from "../../parts/defaults.js"
import {GqlVariant, variants} from "./variants.js"
import {GqlImage, ImageFormat, image} from "./image.js"

export function product({image_format}: {
		image_format: ImageFormat
	}) {

	// "totalInventory" is omitted because it triggers a shopify bug
	//  - https://community.shopify.com/c/hydrogen-headless-and-storefront/need-unauthenticated-read-product-inventory-to-access/td-p/1955913

	return gql`
		availableForSale
		createdAt
		description
		descriptionHtml
		handle
		id
		isGiftCard
		onlineStoreUrl
		productType
		publishedAt
		requiresSellingPlan
		tags
		title
		updatedAt
		vendor

		options(first: ${defaults.page_size}) {
			name
			values
		}

		featuredImage {
			id
		}

		collections(first: ${defaults.page_size}) {
			${edges(gql`
				id
			`)}
		}

		images(first: ${defaults.page_size}) {
			${edges(image(image_format))}
		}

		${variants()}
	`
}

export type GqlProduct = {
	availableForSale: boolean
	createdAt: string
	description: string
	descriptionHtml: string
	handle: string
	id: string
	isGiftCard: boolean
	onlineStoreUrl?: string
	productType: string
	publishedAt: string
	requiresSellingPlan: boolean
	tags: string[]
	title: string
	updatedAt: string
	vendor: string

	options: {
		name: string
		values: string[]
	}[]

	featuredImage?: {
		id: string
	}

	collections: GqlEdges<{
		id: string
	}>

	images: GqlEdges<GqlImage>
	variants: GqlEdges<GqlVariant>
}

