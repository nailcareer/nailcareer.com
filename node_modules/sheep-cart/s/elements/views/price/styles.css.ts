
import {css} from "@chasemoskal/magical"

export const styles = css`

:host {
	display: flex;
	flex-direction: column;
	--slash-color: var(--sheep-slash-color, #f008);
}

.sale {
	width: max-content;
	align-self: end;
	padding: 0.2em 0.4em;
	border-radius: 1em;
	background: #0808;
	text-transform: uppercase;
}

.coolstack {
	display: flex;
	flex-direction: row-reverse;
	flex-wrap: wrap;
	align-items: center;
	gap: 0.5em;
	flex: flex-wrap;
}

.pricetag {
	display: flex;
	align-items: center;
	gap: 0.1em;

	.symbol {
		font-size: 2em;
		align-self: center;
	}

	.big {
		font-size: 2.4em;
	}

	.stack {
		display: inline-flex;
		flex-direction: column;
		line-height: 1em;

		> .currency {
			opacity: 0.5;
			font-size: 0.75em;
		}
	}

	&.comparison {
		font-size: 0.7em;
		position: relative;
		width: max-content;

		& > * {
			opacity: 0.4;
		}

		& [part="slash"] {
			color: var(--slash-color);
			position: absolute;
			inset: 0;
			width: 100%;
			height: 100%;
			background: linear-gradient(to top left,
				transparent 0%,
				transparent calc(50% - 2px),
				currentColor calc(50% - 2px),
				currentColor calc(50% + 2px),
				transparent calc(50% + 2px),
				transparent 100%);
			pointer-events: none;
		}
	}
}

`

