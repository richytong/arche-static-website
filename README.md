# arche-static-website
A static website built with [Arche](https://github.com/richytong/arche?tab=readme-ov-file#arche).

## Project Structure

```
arche-static-website/
    lib/
        README.md
    public/
        components/
            ClickExample.js
        elements/
            LoadMoreButton.js
            TodoCardElements.js
        global.js
        global.css
        index.html
    config.js
    serve-local.sh
    update-pages.sh
    package.json
    README.md
```

### [public/components/](/public/components)

Put [React](https://react.dev/) components in this directory.

### [public/elements/](/public/elements)

Put [elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) in this directory.

### [public/global.js](/public/global.js)

JavaScript in this file is available in all HTML `.html` and JavaScript `.js` files.

### [public/global.css](/public/global.css)

CSS in this file is available in all HTML `.html` and JavaScript `.js` files.

### [public/index.html](/public/index.html)

Serves requests for the home page `/`.

## Run it locally

1. Fork the repo

![github-fork-button](https://rubico.land/assets/github-fork-button.jpg)

2. Clone your forked version

```
# ssh
git clone git@github.com:my-github-user/arche-static-website.git

# https
git clone https://github.com/my-github-user/arche-static-website.git
```

3. Install dependencies

```
npm i
```

4. Start the local web server

```
./serve-local.sh
```

5. Navigate to `http://localhost:4507/` in your browser

![arche-static-website-home-page](https://rubico.land/assets/vanilla-static-website-home-page.jpg)

## Make changes to the code

1. Open the [index.html](/public/index.html) file in your IDE or text editor

![open-index-html-2](https://rubico.land/assets/open-index-html-2.jpg)

2. Scroll down to the start of the `<body></body>` tag

![scroll-down-to-start-of-body-tag](https://rubico.land/assets/scroll-down-to-start-of-body-tag.jpg)

3. Add new HTML

```html
<div id="my-change">
  <h2>My Change</h2>
  <p>My HTML</p>
</div>
```

![add-new-html-2](https://rubico.land/assets/add-new-html-2.jpg)

4. Add new JavaScript

```html
<script>
const myChangeElement = document.getElementById('my-change')
const { Div, P } = DocumentElement
const myJSElement = Div({ id: 'my-js-element' }, [
  P('My JS Element'),
])
myChangeElement.appendChild(myJSElement)
</script>
```

![add-new-javascript-2](https://rubico.land/assets/add-new-javascript-2.jpg)

5. Add new CSS

```html
<style>
@scope (#my-change) {
  :scope {
    background-color: magenta;
  }
  h2 {
    color: blue;
  }
}
</style>
```

![add-new-css](https://rubico.land/assets/add-new-css.jpg)

6. Refresh the page `http://localhost:4507/` to view the changes

![arche-static-website-changes](https://rubico.land/assets/vanilla-static-website-changes.jpg)

## Add a new page

TODO
