const ObjectAttributes = require('./ObjectAttributes')

/**
 * @name ModuleScriptTag
 *
 * @synopsis
 * ```coffeescript [specscript]
 * ModuleScriptTag(url string, options? {}) -> scriptTag string
 * ```
 */
function ModuleScriptTag(url, options = {}) {
  return `
<script type="module" src="${url}" ${ObjectAttributes(options)}></script>
  `.trim()
}

module.exports = ModuleScriptTag
