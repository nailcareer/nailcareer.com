
// import {decode_from_hash} from "./decode_from_hash.js"

export function parse_hash_parts(prefix: string, hash: string) {
	if (hash && hash[0] === "#")
		hash = hash.slice(1)

	if (prefix && hash && hash.startsWith(prefix))
		hash = hash.slice(prefix.length)

	return hash.includes("/")
		? hash.split("/").slice(1)
		: [hash]

	// return parts.map(part => decode_from_hash(part))
}

