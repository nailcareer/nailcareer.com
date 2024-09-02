
import {Context} from "../../../../context/context.js"

export function get_tag_data({state}: Context) {
	const {route, tags} = state
	const active_tag_names = (route && route.zone === "search")
		? route.tags
		: []

	const is_tag_active = (tag: string) => {
		return active_tag_names.includes(tag)
	}

	const tag_data = tags.map(tag => ({
		tag,
		active: is_tag_active(tag),
	}))

	return tag_data
}
