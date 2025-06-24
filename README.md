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
    update-pages
    deploy-aws-s3
    package.json
    README.md
```

### [public/components/](/public/components)

Put [React](https://react.dev/) components in this directory.

### [public/elements/](/public/elements)

Put [elements](https://developer.mozilla.org/en-US/docs/Web/API/Element) in this directory.

### [public/global.js](/public/global.js)

JavaScript in this file is run at the top of all HTML `.html` files in [config.publicDir](#configpublicdir). Define global variables and functions in this file, e.g. `window.myVariable = 1`.

### [public/global.css](/public/global.css)

CSS in this file is applied to all HTML `.html` files in [config.publicDir](#configpublicdir)

### [public/index.html](/public/index.html)

This page is served to requests for the home page `/`.

### [config.js](/config.js)

Contains information about pages, dependencies, and site metadata.

#### config.domain

The [domain name](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name/) of the website, e.g. `example.com`. Register a new domain with [Amazon Route53](https://console.aws.amazon.com/route53/domains/home).

#### config.scripts

A list of [script tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script) that will be loaded by every page.

#### config.stylesheets

A list of stylesheet [link tags](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link) that will be loaded by every page.

#### config.publicDir

The name of the directory that stores the website's HTML, JavaScript, and CSS files.

#### config.pages

A list of objects that specify the website's pages. Each object has four properties: `title`, `description`, `url`, and `filepath`.

  * `title` - the page's title. This will be used for the page's [metadata](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  * `description` - the page's description. This will be used for the page's metadata
  * `url` - the page's relative url. This will be used with [config.domain](#configdomain) for the page's metadata
  * `filepath` - the location of the page within [config.publicDir](#configpublicdir)

### [serve-local.sh](/serve-local.sh)

Starts the local static web server.

### [update-pages](/update-pages)

Synchronizes the public HTML pages in `public/` with the pages, dependencies, and site metadata in `config.js`. See [config.js](#configjs).

### [deploy-aws-s3](/deploy-aws-s3)

Uploads all files in [config.publicDir](#configpublicdir) to an Amazon S3 Bucket. See [deployment](#deployment).

### [package.json](/package.json)

Stores metadata about this project including `name`, `version`, `dependencies`, and `scripts`.

### [README.md](/README.md)

You are reading this file.

### [lib/](/lib)

Make changes to the scaffolding of this project (advanced). Start hacking [here](/lib/README.md).

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

## Deployment
Deploy to a new Amazon S3 Bucket for [config.domain](#configdomain). Read more about [Amazon S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html#BasicsBucket).

Run the deployment script.

```
# uses your default aws configuration and credentials found in ~/.aws/config and ~/.aws/credentials
./deploy-aws-s3

# provide your aws profile
AWS_PROFILE=<your_aws_profile> ./deploy-aws-s3

# provide your aws credentials directly
AWS_ACCESS_KEY_ID=<your_aws_access_key_id> AWS_SECRET_ACCESS_KEY=<your_secret_access_key> AWS_REGION=<your_aws_region> ./deploy-aws-s3
```

Set up a new domain on [Amazon Web Services](https://aws.amazon.com/) with [S3](https://aws.amazon.com/s3/), [CloudFront](https://aws.amazon.com/cloudfront/), and [Route53](https://aws.amazon.com/route53/).

TODO
