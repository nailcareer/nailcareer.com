
import {pub} from "@benev/slate"

import {ModalSpec} from "./spec.js"
import {IdPuller} from "../tools/id_puller.js"

export class Modal {
	#id = new IdPuller()

	on = {
		open: pub<{id: string, modal: ModalSpec.Whatever}>(),
	}

	open(modal: ModalSpec.Whatever) {
		this.on.open.publish({
			modal,
			id: this.#id.pull().toString(),
		})
	}
}

