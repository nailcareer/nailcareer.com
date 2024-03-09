
export function getAssignedElements(slot) {
	const nodes = Array.from(slot.assignedNodes())
	return nodes.filter(node => node instanceof HTMLElement)
}
