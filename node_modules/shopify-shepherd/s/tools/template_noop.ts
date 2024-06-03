
export function template_noop(strings: TemplateStringsArray, ...values: any[]) {
	return Array.from(strings).reduce(
		(previous, current, index) => previous + current + (values[index] ?? ""),
		""
	)
}

