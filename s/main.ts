
import theme from "./framework/theme.css.js"
import {NceEmail} from "./components/nce-email.js"
import {NceHeader} from "./components/nce-header.js"
import {NceFooter} from "./components/nce-footer.js"
import {themeComponents, registerComponents} from "./framework/component.js"

registerComponents(
	themeComponents(theme, {
		NceEmail,
		NceHeader,
		NceFooter,
	})
)

import "shopper"
import "carouse"

console.log("💅")
