/**
 * @name HeadTags
 *
 * @synopsis
 * ```coffeescript [specscript]
 * HeadTags(options {
 *   title: string,
 *   description: string,
 *   url: string, // must be full url
 * }) -> headTags string
 * ```
 */
function HeadTags(options) {
  const {
    title,
    description,
    url,
  } = options

  return `
<title>${title}</title>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width">
<meta name="description" content="${description}" />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta property="og:title" content="${title}" />
<meta property="og:type" content="object" />
<meta property="og:url" content="${url}" />
<meta property="og:description" content="${description}" />

<link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png">
<link rel="manifest" href="/site.webmanifest">
<link rel="canonical" href="${url}">
  `.trim()
}

module.exports = HeadTags
