
import {css} from "@chasemoskal/magical"

export const style = css`

:host {
	display: flex;
	gap: 1em;
}

a {
	color: inherit;
	text-decoration: none;

	&[data-marked] {
		text-decoration: underline;
	}
}

`

