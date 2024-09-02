
function dashify(camel) {
	return camel.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export function registerComponents(components) {
	for (const Component of components)
		customElements.define(dashify(Component.name), Component)
}
