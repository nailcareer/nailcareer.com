
export function process_comma_list(raw?: string) {
	return raw
		? raw.split(/\s+/).map(id => id.trim())
		: []
}

