
import {Component, html, property, mixinStyles, css, TemplateResult} from "../framework/component.js"

@mixinStyles(css`

:host {
	display: inline-block;
}

`)
export class NceEmail extends Component {

	@property({type: String, reflect: true})
	user: string

	@property({type: String, reflect: true})
	domain: string

	render(): TemplateResult {
		const email = `${this.user}@${this.domain}`
		return html`
			<a part=link target=_blank href="mailto:${email}" title="Send email to ${email}">
				${email}
			</a>
		`
	}
}
