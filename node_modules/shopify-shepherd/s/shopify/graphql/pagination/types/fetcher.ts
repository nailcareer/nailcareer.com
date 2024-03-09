
import {GqlPaginated} from "../../units/paginated.js"

export type Fetcher<N> = (after?: string) => Promise<GqlPaginated<N> | void>

