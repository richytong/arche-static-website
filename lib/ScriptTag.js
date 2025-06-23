const ObjectAttributes = require('./ObjectAttributes')

/**
 * @name ScriptTag
 *
 * @synopsis
 * ```coffeescript [specscript]
 * ScriptTag(url string, options? {}) -> scriptTag string
 * ```
 */
function ScriptTag(url, options = {}) {
  return `
<script src="${url}" ${ObjectAttributes(options)}></script>
  `.trim()
}

module.exports = ScriptTag
