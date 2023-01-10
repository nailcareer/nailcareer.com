
import {Component, html, property, mixinStyles, css, TemplateResult} from "../framework/component.js"

@mixinStyles(css`:host { display: inline-block; }`)
export class NcePhone extends Component {

	@property({type: String, reflect: true})
	first: string

	@property({type: String, reflect: true})
	second: string

	render(): TemplateResult {
		const phoneNumberWithDashes = this.first + "-" + this.second
		const phoneNumber = phoneNumberWithDashes.replace(/-/g, "")

		return html`
			<a
				part=link
				target=_blank
				href="tel:${phoneNumber}"
				title="Send email to ${phoneNumberWithDashes}">
					${phoneNumberWithDashes}
			</a>
		`
	}
}
