
import {promises} from "fs"

export const read = (path: string): Promise<string> =>
	promises.readFile(path, "utf8")
