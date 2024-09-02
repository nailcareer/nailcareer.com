
![shopify-shepherd](./assets/shepherd.webp)

# 🙚 shopify-shepherd 🙘

**unofficial shopify frontend js sdk**  
shopify-shepherd helps you build a clientside ecommerce experience  

♻️ replaces the official [shopify-buy sdk](https://www.npmjs.com/package/shopify-buy)  
🐏 powers [sheep-cart](https://github.com/chase-moskal/sheep-cart#readme) store ui  
🛡️ fully typed, and written in typescript  
🗿 zero dependencies  
🤝 extensible and open to pull requests  
💖 free and open source  
📦 `npm i shopify-shepherd`  

<br/>

*but why not just use shopify's official sdk?*  
it's poorly maintained, semi-abandoned, and missing features that i need for building [sheep-cart](https://github.com/chase-moskal/sheep-cart#readme).  

<br/>

## 🕹️ how to use shepherd

1. 📦 **install shopify-shepherd**
    ```sh
    npm i shopify-shepherd
    ```

1. 🔑 **setup with your shopify credentials**
    ```ts
    import {Shopify} from "shopify-shepherd"

    const shopify = Shopify.setup({
      domain: "dev-bakery.myshopify.com",
      storefront_access_token: "5f636be6b04aeb2a7b96fe9306386f25",
    })
    ```
    - in your shopify admin, you need to [create a custom storefront app](https://help.shopify.com/en/manual/apps/app-types/custom-apps) and obtain an access token there

1. 📥 **fetch basically everything in your store**
    ```ts
    const {
      shop,
      products,
      collections,
    } = await shopify.fetch_everything()
    ```
    - this is a convenience function for no-nonsense folks

<br/>

## 📋 shopify-shepherd by example

- **fetch basically everything**
  ```ts
  const everything = await shopify.fetch_everything()
  ```
- **fetch info about your shop**
  ```ts
  const shop = await shopify.shop()
  ```
- **fetch all products**
  ```ts
  const products = await Shopify.all(shopify.products())
  ```
- **fetch all collections**
  ```ts
  const collections = await Shopify.all(shopify.collections())
  ```
- **fetch all tags**
  ```ts
  const tags = await Shopify.all(shopify.tags())
  ```
- **fetch details about a single product**
  ```ts
  const product = await shopify.product({
    id: "gid://shopify/Product/6606267416654",
  })
  ```
- **loop through every page of products**
  ```ts
  for await (const [page] of shopify.products())
    console.log("page of products", page)
  ```
- **loop through every page of collections**
  ```ts
  for await (const [page] of shopify.collections())
    console.log("page of collections", page)
  ```
- **fetch all products in a specific collection**
  ```ts
  const products = await Shopify.all(shopify.products_in_collection({
    collection_id: "gid://shopify/Collection/270755627086",
  }))
  ```
- **search for products**
  ```ts
  const products = await Shopify.all(shopify.products({
    query: {

      // products must have both of these terms in the title
      terms: ["crunchy", "pakora"],

      // products must have both of these tags
      tags: ["appetizer", "indian"],
    },
  }))
  ```
- **fetch specific products by ids**
  ```ts
  const product = await shopify.specific_products({
    ids: [
      "gid://shopify/Product/6606267416654",
      "gid://shopify/Product/10232153543",
    ],
  })
  ```
- **fetch product recommendations**
  ```ts
  const products = await shopify.product_recommendations({
    product_id: "gid://shopify/Product/6606268268622",
  })
  ```
- **perform a checkout**
  ```ts
  const {web_url} = await shopify.checkout({
    line_items: {
      variant_id: "gid://shopify/ProductVariant/39382832709710",
      quantity: 1,
    },
  })
  ```

<br/>

## 📜 shepherd's genius-tier pagination

1. 🤔 **understanding shopify's pagination model**
    - shopify supports the kind of pagination that is good for a "load more" button (or the on-scroll kind)
    - shopify does *not* support the kind of pagination that has distinct and identifiable pages, like "page 1", "page 2", etc

1. 🗐 **shepherd presents pagination with javascript [async generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)**  
    - paging through products
      ```ts
      for await (const [page] of shopify.products())
        console.log("page of products", page)
      ```
    - paging through collections
      ```ts
      for await (const [page] of shopify.collections())
        console.log("page of collections", page)
      ```
    - don't forget you can set the page_size like this
      ```ts
      for (await const [page] of shopify.products({page_size: 250}))
        console.log(page)
      ```
      - 250 is the default page size
      - 250 is also the maximum that shopify allows
    - you can also [manually go page-by-page](./docs/manual_paging.md)
    - or you can [implement your own "load more" button logic](./docs/load_more_pages.md)

1. 🪄 **fetch every page with the `Shopify.all` helper**
    - fetch all products
      ```ts
      const products = await Shopify.all(shopify.products())
      ```
    - fetch all collections
      ```ts
      const collections = await Shopify.all(shopify.collections())
      ```

1. 🔂 **fetch only the first page with the `Shopify.first` helper**
    - fetch first page of products
      ```ts
      const products = await Shopify.first(shopify.products())
      ```

<br/>

## 🌎 shepherd knows about countries

1. 📥 **fetch your shop info**  
    ```ts
    const shop = await shopify.shop()

    console.log(shop.shipsToCountries)
      //⮞ ["CA", "US", "MX", "XX"]
    ```
    - shopify provides your shop's shippable countries in two-letter ISO-3166 alpha-2 format
    - but users probably want to see the full names of the countries
    - so shepherd provides a utility for that

1. ⏳ **separately import shepherd's `CountryLibrary`**
    ```ts
    import {CountryLibrary} from "shopify-shepherd/x/countries.js"
    ```
    - the country data weighs `15 K`
    - it's an optional import, so you can choose if you want to bring that data into your bundle

1. 💅 **use the country library to show pretty names to users**
    ```ts
    const countries = new CountryLibrary().query_names(shop.shipsToCountries)

    console.log("countries we ship to: " + countries.join(", "))
      //⮞ countries we ship to: Canada, United States of America, Mexico, XX
    ```
    - 🤷 sometimes shopify provides two-letter codes that are not in the [ISO-3166 data](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes) we're using -- so you might get some two-letter codes at the end of the list
    - if you need more control, you can use [query](./s/parts/countries/country_library.ts#L19) instead of `query_names`
