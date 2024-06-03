import { readFile, writeFile } from "fs/promises";
export const read = async (path) => readFile(path, "utf8");
export const write = async (path, data) => writeFile(path, data, "utf8");
//# sourceMappingURL=reading-and-writing.js.map