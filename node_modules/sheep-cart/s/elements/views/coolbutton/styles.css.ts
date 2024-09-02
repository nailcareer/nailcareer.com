
import {css} from "@chasemoskal/magical"

export const styles = css`

:host {
	display: block;
	height: max-content;
	width: max-content;
}

button {
	display: inline-flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	cursor: pointer;
	user-select: none;
	padding: 0.2em 0.5em;
	font: inherit;
	font-weight: bold;
	border: none;
	border: 0.2em solid #fff8;
	border-radius: 0.5em;
	text-transform: uppercase;

	opacity: 0.7;
	color: white;
	background: #0b0;
	text-shadow: 0.1em 0.1em 0.1em #0004;

	&:is(:hover, :focus) {
		opacity: 0.9;
	}

	&:active {
		opacity: 1;
	}

	&[disabled] {
		opacity: 0.2;
		background: #888;
		color: white;
		cursor: default;
	}
}

`

