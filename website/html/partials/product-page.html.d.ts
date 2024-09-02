import { Product, NceWebsiteContext } from "../../types.js";
declare const _default: ({ product: { title, product, carousel, writeup, writeupMarkdown, youtubeEmbed, details, }, imagesDirectory, ...context }: NceWebsiteContext & {
    product: Product;
    imagesDirectory: string;
}) => import("xiome/x/toolbox/hamster-html/html.js").HtmlTemplate;
export default _default;
