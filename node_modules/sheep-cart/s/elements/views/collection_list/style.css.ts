
import {css} from "@chasemoskal/magical"

export const styles = css`

:host {
	display: block;
	container: collection-list / inline-size;
}

[part="grid"] {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(24em, 1fr));
	gap: 1em;
	--plate-color: var(--collection-list-plate-color, #8884);
}

[part="grid"] > a {
	padding: 1em 2em;
	background-color: var(--plate-color);
	background-size: cover, cover;
	background-position: center center, center center;
	color: white;
	font-weight: bold;
	border-radius: 0.5em;
	box-shadow: 0.1em 0.2em 0.5em #0004;

	font-size: 1.5em;
	color: white;
	text-decoration: none;
	text-shadow:
		0.05em 0.10em 0.5em black,
		0.05em 0.10em 0.5em black,
		0.05em 0.10em 0 black;

	&:hover { text-decoration: underline; }
	&:active { text-decoration: double underline; }
}

@container collection-list (width < 30em) {
	[part="grid"] {
		display: flex;
		flex-direction: column;
	}
}

@container collection-list (width < 16em) {
	[part="grid"] > a {
		font-size: 1.2em;
		padding: 0.5em 1em;
	}
}

`

