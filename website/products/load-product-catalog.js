import yaml from "js-yaml";
import { read } from "../buildtools/reading-and-writing.js";
export async function loadProductCatalog(path) {
    return yaml.load(await read(path));
}
//# sourceMappingURL=load-product-catalog.js.map