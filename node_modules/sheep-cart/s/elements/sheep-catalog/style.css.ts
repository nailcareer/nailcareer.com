
import {css} from "@chasemoskal/magical"

export const style = css`

:host {
	display: block;
}

[part="collection-tab-list"] {
	display: flex;
	margin-bottom: 1em;
	flex-wrap: wrap;
	justify-content: center;

	> [part="collection-tab"] {
		color: inherit;
		text-shadow: none;
		padding: 0.2em 0.5em;
		border-radius: 0.5em;
		font-size: 1.1em;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		font-weight: bold;
		-webkit-user-drag: none;
		user-drag: none;
		user-select: none;
		overflow: hidden;

		position: relative;

		> .bgimg {
			opacity: 0;
			z-index: 1;
			position: absolute;
			inset: 0;
			background-size: cover;
			background-position: top center;
			transition: all 1s ease;
		}

		> .text {
			z-index: 2;
			position: relative;
		}

		&[data-active-collection] {
			color: white;
			text-shadow: 0.05em 0.1em 0.1em #0008;
			box-shadow: 0.1em 0.2em 0.3em #0002;
			& > .bgimg {
				opacity: 0.5;
				background-position: center center;
			}
		}
	}
}

`

