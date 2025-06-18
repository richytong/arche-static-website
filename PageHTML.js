const HeadTags = require('./HeadTags')
const ModuleScriptTag = require('./ModuleScriptTag')

/**
 * @name PageHTML
 *
 * @synopsis
 * ```coffeescript [specscript]
 * PageHTML(options {
 *   title: string,
 *   description: string,
 *   url: string, // must be full url
 *   scriptDependencies?: Array<string>,
 *   stylesheets?: Array<string>,
 *   bodyHTML string,
 * }) -> html string
 * ```
 */
function PageHTML(options) {
  const {
    title,
    description,
    url,
    scriptDependencies = [],
    stylesheets = [],
    bodyHTML,
  } = options

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  ${HeadTags({ title, description, url })}
  ${scriptDependencies.join('\n')}
  ${stylesheets.join('\n')}
</head>

<body>${bodyHTML}</body>

${ModuleScriptTag('/index.js')}
</html>
  `.trim()
}

module.exports = PageHTML
