
import {Suite, expect} from "cynic"
import {convert_product_query_spec_to_string} from "./convert_product_query_spec_to_string.js"

export default <Suite>{
	tags: {

		async "tag query does not return undefined"() {
			const q = convert_product_query_spec_to_string({
				tags: ["aaa"],
			})
			expect(q).ok()
			expect(q!.includes("undefined")).not.equals(true)
		},

		async "single tag"() {
			const q = convert_product_query_spec_to_string({
				tags: ["aaa"],
			})
			expect(q).equals("((tag:aaa))")
		},

		async "two tags"() {
			const q = convert_product_query_spec_to_string({
				tags: ["aaa", "bbb"],
			})
			expect(q).equals("((tag:aaa) AND (tag:bbb))")
		},

		async "tag special chars are escaped"() {
			const q = convert_product_query_spec_to_string({
				tags: [String.raw`a\b:c(d)e`],
			})
			expect(q).equals(String.raw`((tag:a\\b\:c\(d\)e))`)
		},

	},
	terms: {

		async "two terms"() {
			const q = convert_product_query_spec_to_string({
				terms: ["aaa", "bbb"],
			})
			expect(q).equals("((title:*aaa* OR tag:*aaa*) AND (title:*bbb* OR tag:*bbb*))")
		},

	},
	composite: {

		async "tag and term"() {
			const q = convert_product_query_spec_to_string({
				tags: ["aaa"],
				terms: ["bbb"],
			})
			expect(q).equals("((tag:aaa)) AND ((title:*bbb* OR tag:*bbb*))")
		},

	},
}

