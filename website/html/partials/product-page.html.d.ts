import { Product, NceWebsiteContext } from "../../types.js";
declare const _default: ({ product: { title, product, carousel, writeup, writeupMarkdown, youtubeEmbed, details, }, imagesDirectory, ...context }: import("../../types.js").NceWebsiteInputs & import("xiome/x/toolbox/hamster-html/website/build-website-types.js").WebsiteContext & {
    product: Product;
    imagesDirectory: string;
}) => import("xiome/x/toolbox/hamster-html/html.js").HtmlTemplate;
export default _default;
