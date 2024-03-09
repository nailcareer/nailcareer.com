
import {readFile, writeFile} from "fs/promises"

export const read = async(path: string): Promise<string> =>
	readFile(path, "utf8")

export const write = async(path: string, data: string): Promise<void> =>
	writeFile(path, data, "utf8")
