
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

	render(): TemplateResult {
		return html`
			<footer>
				<p><strong>Suzie’s Nail Career Education Inc</strong></p>
				<p>Email <nce-email user="hello" domain="nailcareer.com"></nce-email> for customer support or business inquiries</p>
				<p>
					Store
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/privacy-policy.md">privacy policy</a>
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/terms-of-service.md">terms of service</a>
					<a part=link target=_blank href="https://github.com/nailcareer/nailcareer.com/blob/master/legal/refund-policy.md">refund policy</a>
				</p>
				<p>
					Community
					<a part=link target=_blank href="https://xiome.io/legal">policies and terms of service</a>
				</p>
			</footer>
		`
	}
}
