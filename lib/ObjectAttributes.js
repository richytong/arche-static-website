/**
 * @name ObjectHTLMAttributes
 *
 * @synopsis
 * ```coffeescript [specscript]
 * ObjectHTLMAttributes(o object) -> htmlAttributes
 * ```
 */
function ObjectHTLMAttributes(o) {
  const attributeArray = []
  for (const key in o) {
    const value = o[key]
    if (typeof value == 'boolean') {
      attributeArray.push(`${key}`)
    } else {
      attributeArray.push(`${key}="${value}"`)
    }
  }
  return attributeArray.join(' ')
}

module.exports = ObjectHTLMAttributes
