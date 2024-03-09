
export async function concurrent<O extends {}>(o: O) {
	const keys = Object.keys(o)
	const awaitables = Object.values(o)

	const values = await Promise.all(awaitables)

	const result: any = {}
	keys.forEach((key, i) => result[key] = values[i])

	return result as {[P in keyof O]: Awaited<O[P]>}
}

