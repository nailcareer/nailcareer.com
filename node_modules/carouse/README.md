
# 🍻 carouse 🚬

***web component carousel ui***

flip between images or other content, with arrow/dot buttons

live demos
- [gh-pages dev page chasemoskal.com/carouse](https://chasemoskal.com/carouse/)
- ["carouse demo" on codepen.io](https://codepen.io/ChaseMoskal/pen/QRGLxy?editors=1000)

## understanding the `<carouse-carousel>` component

1. **put the carousel on your page**
    ```html
    <carouse-carousel arrows dots loop hidden>
      <figure>
        <img src="https://picsum.photos/300/200?1" alt=""/>
        <figcaption>
          <p>hello</p>
        </figcaption>
      </figure>
      <figure>
        <img src="https://picsum.photos/300/200?2" alt=""/>
        <figcaption>
          <p>hola</p>
        </figcaption>
      </figure>
      <figure>
        <img src="https://picsum.photos/300/200?3" alt=""/>
        <figcaption>
          <p>hallo</p>
        </figcaption>
      </figure>
    </carouse-carousel>
    ```
2. **know how to use the carousel**  
    `<carouse-carousel arrows dots loop hidden>`
    - **optional boolean attributes**
      - `[arrows]` – enable arrow controls
      - `[dots]` – enable dot button controls
      - `[loop]` – enable end-to-end looping
      - `[hidden]` – hide the component until it has loaded
    - **how does the carousel work?**
      - you give it html elements as children, and the carousel treats them like slides
      - then the carousel sets the `[hidden]` attribute on all but the "active slide"
    - **programmatically control the carousel**
      - `carousel.forward()`, onto the next slide
      - `carousel.backward()`, back to the previous slide
      - `carousel.jump(0)`, jump directly to the first slide
      - `carousel.childElementCount`, getter for the number of children
3. **style the carousel and its children**
      ```html
      <style>
        @import url("https://unpkg.com/carouse@0.0.0-dev.4/dist/carouse.css");

        carouse-carousel {
          max-width: 300px;

          /* carouse custom css properties */
          --focus-outline: 2px solid #0ef;
          --carouse-slate-bg: rgba(255,255,255, 0.1);
          --carouse-arrow-size: 4em;
          --carouse-arrow-bg: rgba(60,60,60, 0.8);
          --carouse-dotbar-bg: rgba(0,0,0, 0.3);
          --carouse-dot-size: 0.8em;
          --carouse-dot-bg: white;
        }
      </style>
      ```
      - you'll probably want to import `carouse.css` because it has some preset styles for `figure` and `figcaption` elements
      - every available `--carouse-` custom property is shown with its default value
      - you'll probably want to set a `max-width` rule on the carousel
      - the carousel assumes you are setting a app-level `* { margin: 0; padding: 0; box-sizing: border-box; }`, and if you don't, it might look wacky

## okay, so that's how i use it.. how do i install it?

- include the following snippet on your page

  ```html
  <script type="importmap-shim">
    {
      "imports": {
        "lit-html/": "https://unpkg.com/lit-html@1.0.0/",
        "lit-html": "https://unpkg.com/lit-html@1.0.0/lit-html.js",
        "lit-element/": "https://unpkg.com/lit-element@2.1.0/",
        "lit-element": "https://unpkg.com/lit-element@2.1.0/lit-element.js",
        "carouse/": "https://unpkg.com/carouse@0.0.0-dev.4/",
        "carouse": "https://unpkg.com/carouse@0.0.0-dev.4/dist/register-all.js"
      }
    }
  </script>
  <script type="module-shim">
    import "carouse/dist/register-all.js"
  </script>
  <script src="https://unpkg.com/es-module-shims@0.2.3/dist/es-module-shims.js"></script>
  ```

  here's what's going on in this snippet

  - **import maps**
    - in the above snippet, we provide an import map which locates `carouse` and its dependencies
    - of course, for the import map, we're using guy bedford's awesome polyfill: [es-module-shims](https://github.com/guybedford/es-module-shims)
    - if you're from the future, you won't need the `-shim`'s
  - **register the carouse component**
    - we run `import "carouse/dist/register-all.js"` to register the `<carouse-carousel>` component

## contributions are welcome

please open issues and launch pull requests, let's talk about it
