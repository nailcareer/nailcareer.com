var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, html, property, mixinStyles, css } from "../framework/component.js";
let NcePhone = class NcePhone extends Component {
    render() {
        const phoneNumberWithDashes = this.first + "-" + this.second;
        const phoneNumber = phoneNumberWithDashes.replace(/-/g, "");
        return html `
			<a
				part=link
				target=_blank
				href="tel:${phoneNumber}"
				title="Phone ${phoneNumberWithDashes}">
					${phoneNumberWithDashes}
			</a>
		`;
    }
};
__decorate([
    property({ type: String, reflect: true })
], NcePhone.prototype, "first", void 0);
__decorate([
    property({ type: String, reflect: true })
], NcePhone.prototype, "second", void 0);
NcePhone = __decorate([
    mixinStyles(css `:host { display: inline-block; }`)
], NcePhone);
export { NcePhone };
//# sourceMappingURL=nce-phone.js.map