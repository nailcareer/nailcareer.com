
import NceLogo from "../icons/nce-logo.svg.js"
import {Component, html, mixinStyles, css, property, TemplateResult} from "../framework/component.js"

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
		padding: 0.1em 0.5em;
		margin: 0.2em 0;
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

	a:hover, a:focus {
		opacity: 1;
		text-decoration: underline;
	}

	a[data-marked] {
		text-decoration: underline;
	}

`)
export class NceHeader extends Component {

	@property({type: String})
	["current-page"]: string

	render(): TemplateResult {
		const page = (pageName: string) => pageName === this["current-page"]
		return html`
			<header>
				<slot></slot>
				<div>
					<a href="/">
						${NceLogo}
					</a>
					<nav>
						<a part="navlink" ?data-marked=${page("store")} href="/store/">Store</a
						><a part="navlink" ?data-marked=${page("blog")} href="https://www.blog.nailcareer.com/">Blog</a
						><a part="navlink tag new" ?data-marked=${page("community")} data-tag=new href="/community/">Community</a
						><a part="navlink tag soon" ?data-marked=${page("academy")} data-tag=soon>Academy</a>
					</nav>
				</div>
			</header>
		`
	}
}
