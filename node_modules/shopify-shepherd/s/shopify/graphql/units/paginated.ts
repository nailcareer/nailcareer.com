
import {GqlEdges} from "./edges.js"
import {gql} from "../../../tools/gql.js"

const pageInfo = () => gql`
	pageInfo {
		hasNextPage
		endCursor
	}
`

export const paginated = (node: string) => gql`
	edges {
		node {
			${node}
		}
	}
	${pageInfo()}
`

export const paginated_node = () => gql`
	edges {
		node
	}
	${pageInfo()}
`

export type GqlPaginated<N> = GqlEdges<N> & {
	pageInfo: {
		hasNextPage: boolean
		endCursor: string
	}
}

