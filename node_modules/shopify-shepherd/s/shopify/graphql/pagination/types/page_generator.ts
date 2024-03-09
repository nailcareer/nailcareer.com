
import {PageReport} from "./page_report.js"

export type PageGenerator<N> = AsyncGenerator<PageReport<N>, void, unknown>

