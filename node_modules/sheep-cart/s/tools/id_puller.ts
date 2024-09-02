
export class IdPuller {
	#counter = 0

	pull() {
		return this.#counter++
	}
}

