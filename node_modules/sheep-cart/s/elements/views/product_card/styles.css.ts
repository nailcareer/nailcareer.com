
import {css} from "@chasemoskal/magical"

export const styles = css`

:host > a {
	display: flex;
	width: 100%;
	height: 100%;
	gap: 0.5em;
	text-decoration: none;
	color: inherit;

	> img {
		flex: 1;
		max-width: 4rem;
		object-fit: cover;
		user-select: none;
	}

	> [part="plate"] {
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		gap: 0.5em;

		> h1 {
			font-size: 1.2em;
		}

		> .action {
			display: flex;
			margin-top: auto;
			gap: 0.5em;
			align-items: end;
			flex-wrap: wrap-reverse;

			> .button {
				flex: 1 1 6em;
				width: 100%;
				max-width: 10em;

				&::part(button) {
					min-height: 3em;
				}

				&::part(slot) {
					display: flex;
					flex-direction: column;
					justify-content: center;
				}

				small {
					font-weight: normal;
				}
			}

			> .pricebox {
				margin-left: auto;
			}
		}
	}
}

`

