
import NceLogo from "../icons/nce-logo.svg.js"
import {Component3, html, mixinStyles, css, property} from "../framework/component.js"

@mixinStyles(css`

	:host {
		display: block;
	}

	header > div {
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

	a[data-marked] {
		text-decoration: underline;
	}

`)
export class NceHeader extends Component3 {

	@property({type: String})
	["current-page"]: string

	render() {
		const page = (pageName: string) => pageName === this["current-page"]
		return html`
			<header>
				<slot></slot>
				<div>
					<a href="/">
						${NceLogo}
					</a>
					<nav>
						<a ?data-marked=${page("home")} href="/">Home</a>
						<a ?data-marked=${page("store")} href="/store/">Store</a>
						<a ?data-marked=${page("blog")} href="https://www.blog.nailcareer.com/">Blog</a>
						<a ?data-marked=${page("community")} data-tag=new href="/community/">Community</a>
					</nav>
				</div>
			</header>
		`
	}
}
