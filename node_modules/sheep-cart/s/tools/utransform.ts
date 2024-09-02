
function expand_id(pre: string, num: string) {
	return `gid://shopify/${pre}/${num}`
}

function expander(pre: string) {
	return (n: string) => expand_id(pre, n)
}

export const utransform = {
	label: (label: string) => label.toLowerCase(),
	id: {
		shorten: (id: string) => id.split("/").at(-1)!,
		expand: {
			collection: expander("Collection"),
			product: expander("Product"),
		},
	},
}

