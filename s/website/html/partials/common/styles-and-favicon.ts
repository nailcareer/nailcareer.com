
import {html} from "xiome/x/toolbox/hamster-html/html.js"
import {HashVersioner} from "xiome/x/toolbox/hamster-html/versioning/hash-versioner.js"

export function stylesAndFavicon(v: HashVersioner) {
	return html`
		<link rel=stylesheet href="${v(`/styles.css`)}"/>
		<link rel=icon type="image/jpeg" href="/assets/images/suzie.jpg"/>
		<link rel=preconnect href="https://fonts.googleapis.com"/>
		<link rel=preconnect href="https://fonts.gstatic.com" crossorigin/>
		<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"/>
	`
}
