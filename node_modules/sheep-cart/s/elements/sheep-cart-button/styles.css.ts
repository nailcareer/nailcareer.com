
import {css} from "@chasemoskal/magical"

export const styles = css`

button {
	position: relative;
	padding: 1em;
	background: #eeee;
	color: #222;
	border: none;
	border-radius: 1em;
	box-shadow: 0.1em 0.1em 0.3em #0008;
	cursor: pointer;
}

.count {
	position: absolute;
	top: -0.5em;
	right: -0.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 1.5em;
	height: 1.5em;
	border-radius: 1em;
	background: red;
	font-family: sans-serif;
	font-weight: bold;
	color: white;
	text-shadow: 0.1em 0.1em 0.1em #0008;
	&[hidden] { display: none; }
}

`

