
const backslash = "\\"
const characters_to_escape_in_queries = "\\:()\"\'"

export function escape_query_text(text: string) {

	for (const character of characters_to_escape_in_queries)
		text = text.replace(character, backslash + character)

	return text
}

