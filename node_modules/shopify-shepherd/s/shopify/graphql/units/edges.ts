
import {gql} from "../../../tools/gql.js"

export const edges = (node: string) => gql`
	edges {
		node {
			${node}
		}
	}
`

export type GqlEdges<N> = {
	edges: {
		node: N
	}[]
}

