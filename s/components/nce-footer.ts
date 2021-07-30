
import {Component, html, mixinStyles, css} from "../framework/component.js"

@mixinStyles(css`
	
	:host {
		font-size: 0.8em;
		opacity: 0.8;
		display: block;
	}

	footer {
		margin: 5em auto;
		text-align: center;
		padding: 1em;
	}

	footer > * + * {
		margin-top: 0.5em;
	}

	footer ul {
		list-style: none;
	}

`)
export class NceFooter extends Component {

	private email = (() => {
		const username = "angie"
		const domain = "nailcareer.com"
		return `${username}@${domain}`
	})()

	render() {
		const {email} = this
		return html`
			<footer>
				<p><strong>Suzie’s Nail Career Education Inc</strong></p>
				<p>Questions? Send an email</p>
				<p><a part=link target=_blank href="mailto:${email}">${email}</a></p>
				<p><a part=link target=_blank href="https://xiome.io/legal">policies and terms of service</a></p>
			</footer>
		`
	}
}
