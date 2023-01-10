
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
				<p>For customer support or business inquiries,</p>
				<p>Email <nce-email exportparts="link" user="hello" domain="nailcareer.com"></nce-email></p>
				<p>Phone (international) <nce-phone exportparts="link" first="1-833" second="391-1119"></nce-phone></p>
				<p>Phone (british columbia) <nce-phone exportparts="link" first="250-391" second="1118"></nce-phone></p>
				<p><em>Staff are available Monday to Thursday)</em></p>
				<br/>
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
