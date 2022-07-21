import { NceWebsiteContext } from "../../types.js";
import { HtmlTemplate } from "xiome/x/toolbox/hamster-html/html.js";
declare const _default: ({ v, mode, pageName, pageSubtitle, headHtml, mainHtml }: import("../../types.js").NceWebsiteInputs & import("xiome/x/toolbox/hamster-html/website/build-website-types.js").WebsiteContext & {
    pageName: string;
    pageSubtitle?: string;
    headHtml?: HtmlTemplate;
    mainHtml: HtmlTemplate;
}) => HtmlTemplate;
export default _default;
