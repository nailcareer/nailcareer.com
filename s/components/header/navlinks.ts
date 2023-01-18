
import {Navlink} from "./types/navlink.js"

export const navlinks = [
	navlink("Home", "/"),
	navlink("Store", "/store/"),
	navlink("Blog", "https://www.blog.nailcareer.com/"),
	navlink("Academy", "/academy/", ["new"]),
] satisfies Navlink[]

function navlink(
		label: string,
		href: string,
		tags: string[] = [],
	) {

	return {label, href, tags}
}
