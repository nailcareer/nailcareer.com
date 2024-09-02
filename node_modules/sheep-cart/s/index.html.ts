
import {template, html, easypage, startup_scripts_with_dev_mode} from "@benev/turtle"

export default template(async basics => {
	const path = basics.path(import.meta.url)
	return easypage({
		path,
		css: "index.compat.css",
		title: "dev bakery (sheep-cart demo)",
		head: html`
			${startup_scripts_with_dev_mode(path)}
			<link rel="icon" href="${path.root('assets/sheep-favicon.png')}"/>
		`,
		body: html`
			<sheep-modal cart-require-checkout-terms>
				<div slot=cart-terms>
					<h4>Terms of service</h4>
					<details>
						<summary>Click to see details</summary>
						<p>This store, and all its products, are fake.</p>
						<p>This website is for testing and demonstration purposes.</p>
						<p>Do not purchase.</p>
					</details>
				</div>
				<span slot=cart-terms-checkbox-label>
					I understand the terms.
				</span>
			</sheep-modal>

			<div class="follower slice">
				<sheep-cart-button triggers-modal></sheep-cart-button>
			</div>

			<header class="header slice">
				<img
					class=bakery-logo
					alt=""
					src="${path.root('assets/sheep-logo.webp')}"/>

				<div class=bigbar>
					<h1>
						<a href="https://github.com/chase-moskal/sheep-cart">
							<span>sheep-cart</span>
							<small>(on github)</small>
						</a>
					</h1>
					<sheep-search></sheep-search>
					<sheep-nav></sheep-nav>
				</div>
			</header>

			<sheep-catalog class=slice></sheep-catalog>
		`,
	})
})

