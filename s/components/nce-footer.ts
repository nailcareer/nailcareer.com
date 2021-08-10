
import {Component, html, mixinStyles, css, TemplateResult} from "../framework/component.js"

@mixinStyles(css`
	
	:host {
		display: block;
		font-size: 0.8em;
		opacity: 0.8;
	}

	footer {
		text-align: center;
		margin: 5em auto;
		padding: 0 1rem;
	}

	footer > * + * {
		margin-top: 0.5em;
	}

	footer strong {
		font-size: 1.2em;
	}

	footer ul {
		list-style: none;
	}

`)
export class NceFooter extends Component {

	private emailLink({user, domain}: {user: string, domain: string}) {
		const email = `${user}@${domain}`
		return html`<a part=link target=_blank href="mailto:${email}">${email}</a>`
	}

	render(): TemplateResult {
		return html`
			<footer>
				<p><strong>Suzie’s Nail Career Education Inc</strong></p>
				<p>For questions about the store, email ${this.emailLink({user: "angie", domain: "nailcareer.com"})}</p>
				<p>For questions about the website or community, email ${this.emailLink({user: "chase", domain: "nailcareer.com"})}</p>
				<p>For business inquiries, email ${this.emailLink({user: "suzie", domain: "nailcareer.com"})}</p>
				<p><a part=link target=_blank href="https://xiome.io/legal">Community policies and terms of service</a></p>
			</footer>
		`
	}
}
