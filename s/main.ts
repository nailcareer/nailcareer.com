
import theme from "./framework/theme.css.js"
import {NceHeader} from "./components/nce-header.js"
import {NceFooter} from "./components/nce-footer.js"
import {themeComponents, registerComponents} from "./framework/component.js"

registerComponents(
	themeComponents(theme, {
		NceHeader,
		NceFooter,
	})
)

import "shopper"
import "xiome/x/xiome.js"
import "carouse"

console.log("💅")
