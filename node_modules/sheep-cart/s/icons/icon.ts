
export type Tag = (strings: TemplateStringsArray, ...values: any[]) => any

export function icon(strings: TemplateStringsArray, ...values: any[]) {
	return (tag: Tag) => tag(strings, ...values)
}

