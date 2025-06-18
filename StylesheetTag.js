/**
 * @name StylesheetTag
 *
 * @synopsis
 * ```coffeescript [specscript]
 * StylesheetTag(url string) -> tag string
 * ```
 */
function StylesheetTag(url) {
  return `
<link rel="stylesheet" href="${url}" />
  `.trim()
}

module.exports = StylesheetTag
