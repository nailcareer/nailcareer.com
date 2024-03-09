
import {escape_query_text} from "./escape_query_text.js"

export function querytext(strings: TemplateStringsArray, ...values: any[]) {
	return Array.from(strings).reduce(
		(previous, current, index) =>
			previous +
			current +
			escape_query_text(values[index] ?? ""),
		""
	)
}

