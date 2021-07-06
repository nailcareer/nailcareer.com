
import NceLogo from "../icons/nce-logo.svg.js"
import {Component3, html, mixinStyles, css} from "../framework/component.js"

@mixinStyles(css`

	:host {
		display: block;
	}

	header {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 1em;
	}

	nav {
		font-size: 1.5em;
		margin: 0.5em;
		user-select: none;
	}

	nav a {
		display: inline-block;
		margin: 0.2em 0.3em;
	}

	svg {
		display: block;
		height: 7em;
		user-select: none;
		max-width: 100%;
	}

	a {
		position: relative;
		opacity: 0.7;
		color: inherit;
		text-decoration: none;
		transition: opacity 250ms ease;
	}

	a[data-tag]::before {
		position: absolute;
		pointer-events: none;
		opacity: 0.3;
		content: attr(data-tag);
		display: inline-block;
		font-size: 0.5em;
		left: 90%;
		bottom: 70%;
		padding: 0.1em 0.4em;
		border-radius: 1em;
		text-transform: uppercase;
		color: white;
		background: #ff00d4;
		font-weight: bold;
	}

	a:hover, a:focus {
		opacity: 1;
		text-decoration: underline;
	}

`)
export class NceHeader extends Component3 {
	render() {
		return html`
			<header>
				<a href="./">
					${NceLogo}
				</a>
				<nav>
					<a href="./store/">Store</a>
					<a href="https://www.blog.nailcareer.com/">Blog</a>
					<a data-tag=new href="./community/">Community</a>
				</nav>
				<slot></slot>
			</header>
		`
	}
}
