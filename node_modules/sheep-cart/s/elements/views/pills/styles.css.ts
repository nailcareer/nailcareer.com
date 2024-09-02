
import {css} from "@chasemoskal/magical"

export const styles = css`

ol {
	display: flex;
	flex-wrap: wrap;
	list-style: none;
	gap: 0.1em;
}

li {
	border: 1px solid currentColor;
	padding: 0 0.3em;

	&[part="collection"] {
		border-radius: 0.3em;
	}

	&[part="tag"] {
		opacity: 0.7;
		border-radius: 1em;
	}
}

`

