import { buildProductPages } from "./products/build-product-pages.js";
import { loadProductCatalog } from "./products/load-product-catalog.js";
import { buildWebsite } from "xiome/x/toolbox/hamster-html/website/build-website.js";
const mode = process.argv[2];
if (!mode) {
    console.error(`website build requires argument "mode"`);
    process.exit(-1);
}
const inputs = {
    mode,
    catalog: await loadProductCatalog("s/website/product-catalog.yaml"),
};
await Promise.all([
    buildWebsite({
        inputDirectory: "x/website/html",
        outputDirectory: "x",
        excludes: ["partials/**/*"],
        logWrittenFile: path => console.log("write", path),
        context: inputs,
    }),
    buildProductPages(inputs),
]);
console.log("website done");
//# sourceMappingURL=build.js.map