import pageHtml from "./partials/page.html.js";
import { html } from "xiome/x/toolbox/hamster-html/html.js";
export default (context) => pageHtml({
    ...context,
    base: "/",
    pageName: "404",
    pageSubtitle: "Page Not Found",
    mainHtml: html `

	<p class=notfound>404 Page not found</p>
	<h1>Sorry, this page isn't here anymore.</h1>
	<p>You must have followed a link that is now broken.</p>
	<p>Please let us know by contacting support (you'll find the contact info below)</p>

`
});
//# sourceMappingURL=404.html.js.map