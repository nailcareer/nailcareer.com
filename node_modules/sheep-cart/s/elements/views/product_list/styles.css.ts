
import {css} from "@chasemoskal/magical"

export const styles = css`

:host {
	display: block;
	container-type: inline-size;
}

.collection_header {
	margin-bottom: 1em;
	text-align: center;
	text-transform: capitalize;
	font-size: 1.2rem;
}

.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(16em, 1fr));
	width: 100%;
	gap: 0.5rem;
}

@container (width < 16em) {
	.grid {
		display: flex;
		flex-direction: column;
	}
}

[view="product-card"] {
	font-size: 0.8em;
	max-width: 100%;
}

footer {
	display: flex;
	padding: 1em;
	justify-content: center;
	align-items: center;

	> button {
		opacity: 0.7;
		font: inherit;
		text-transform: uppercase;
		font-size: 1em;
		padding: 1em 2em;
		background: #fffa;
		color: #000a;
		border: none;
		cursor: pointer;
		user-select: none;
		border-radius: 3em;
		&:is(:hover, :focus) { opacity: 0.8; }
		&:active { opacity: 1; }
	}
}

`

