var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import NceLogo from "../icons/nce-logo.svg.js";
import { navlinks } from "./header/navlinks.js";
import { renderNavlink } from "./header/render-navlink.js";
import { Component, html, mixinStyles, css, property } from "../framework/component.js";
let NceHeader = class NceHeader extends Component {
    render() {
        return html `
			<header>
				<slot></slot>
				<div>

					<a href="/">
						${NceLogo}
					</a>

					<nav>
						${navlinks.map(renderNavlink(this["current-page"]))}
					</nav>

				</div>
			</header>
		`;
    }
};
__decorate([
    property({ type: String })
], NceHeader.prototype, "current-page", void 0);
NceHeader = __decorate([
    mixinStyles(css `

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
], NceHeader);
export { NceHeader };
//# sourceMappingURL=nce-header.js.map