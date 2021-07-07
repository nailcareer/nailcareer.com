
import "shopper"
import "carouse"

import {NceHeader} from "./components/nce-header.js"
import {NceFooter} from "./components/nce-footer.js"
import {themeComponents, registerComponents} from "./framework/component.js"

import theme from "./framework/theme.css.js"

registerComponents(
	themeComponents(theme, {
		NceHeader,
		NceFooter,
	})
)

console.log("💅")
