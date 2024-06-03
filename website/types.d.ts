import { WebsiteContext } from "xiome/x/toolbox/hamster-html/website/build-website-types.js";
export interface NceWebsiteInputs {
    mode: "debug" | "production";
    catalog: ProductCatalog;
}
export type NceWebsiteContext = NceWebsiteInputs & WebsiteContext;
export interface ProductCatalog {
    [name: string]: ProductCategory | Uncategorized;
}
export interface ProductCategory {
    label: string;
    products: {
        [name: string]: Product | SpecialPartnership;
    };
}
export interface Uncategorized {
    products: {
        [name: string]: Product | SpecialPartnership;
    };
}
export interface Product {
    hideFromIndex?: boolean;
    title: string;
    relocated?: string;
    redirects?: string[];
    product: {
        shopify?: string;
        shopifyUid?: string;
        restockingSoon?: boolean;
        isNew?: boolean;
        notice?: string;
    };
    carousel: {
        aspectRatio?: string;
        images: string[];
    };
    writeup?: string;
    writeupMarkdown?: string;
    youtubeEmbed?: string;
    details?: string;
}
export interface SpecialPartnership {
    "special-partnership": {
        note: string;
        title: string;
        link: string;
        linkTarget: string;
        bubble: string;
        image: string;
        discount?: {
            code: string;
            percentOff: number;
        };
        button: string;
    };
}
