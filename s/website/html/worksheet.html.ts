
import {html} from "xiome/x/toolbox/hamster-html/html.js"

export default () => html`
<html>
<head>

	<meta charset="utf-8"/>
	<meta name=viewport content="width=device-width,initial-scale=1"/>
	<title>
		NCE Worksheet
	</title>

	<link rel="icon" href="https://cdn.jsdelivr.net/npm/nce-common@0.3.3/assets/favicon.ico"/>
	<style>
		* {
			margin: 0;
			padding: 0;
		}
		html, body {
			height: 100%;
		}
		.worksheet {
			display: block;
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
		.printnote {
			display: block;
			width: 100%;
			max-width: 640px;
			margin: auto;
			padding: 1em;
			text-align: center;
		}
		@media print {
			@page {
				size: landscape
			}
			.printnote {
				display: none;
			}
		}
	</style>

</head>
<body>

	<p class="printnote">
		<button class="print" onclick="window.print()">Print</button> this worksheet
	</p>
	<img class="worksheet" src="/assets/images/worksheet.jpg" alt=""/>

</body>
</html>
`
