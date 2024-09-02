import { HtmlTemplate } from "xiome/x/toolbox/hamster-html/html.js";
import { NceWebsiteContext } from "../../types.js";
declare const _default: ({ v, mode, pageName, pageSubtitle, headHtml, mainHtml }: NceWebsiteContext & {
    pageName: string;
    pageSubtitle?: string;
    headHtml?: HtmlTemplate;
    mainHtml: HtmlTemplate;
}) => HtmlTemplate;
export default _default;
