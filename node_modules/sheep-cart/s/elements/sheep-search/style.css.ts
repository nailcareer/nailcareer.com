
import {css} from "@chasemoskal/magical"

export const style = css`

:host {
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	--highlight: var(--sheep-highlight, lime);
}

.searchbox {
	position: relative;

	> input {
		display: block;
		font-size: 1.5em;
		width: 100%;
		min-width: 4em;
		max-width: 20em;
		background: transparent;
		border: 0.1em solid;
		border-radius: 0.5em;
		padding: 0.3em;
		padding-left: 2em;
		color: inherit;
		transition: transform 0.3s ease-in-out;

		&:focus {
			transform: scale(1.03);
		}
	}

	> svg {
		position: absolute;
		left: 0.5em;
		top: 0;
		bottom: 0;
		margin: auto;
		transition: all 0.3s ease-in-out;
	}

	&[data-active] {
		color: var(--highlight);
		+ svg {
			color: inherit;
		}
	}
}


.searchtags {
	display: flex;
	flex-wrap: wrap;
	gap: 0.1em;
	min-width: 0;

	> label {
		display: flex;
		align-items: center;
		border: 1px solid;
		border-radius: 1em;
		padding: 0 0.3em;
		min-width: 0;
		gap: 0.5em;

		& input {
			display: none;
			opacity: 0.5;
		}

		&[data-active] {
			color: var(--highlight);
			& input { opacity: 1; }
		}

		> span {
			font-size: 0.8em;
			user-select: none;
		}
	}
}

`

