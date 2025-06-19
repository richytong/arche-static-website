const { JSDOM } = require('jsdom')
const jquery = require('jquery')


/**
 * @name parseHTML
 *
 * @synopsis
 * ```coffeescript [specscript]
 * parseHTML(html string) -> $ JQuery
 * ```
 */
function parseHTML(html) {
  const dom = new JSDOM(html)
  const $ = jquery(dom.window)
  return $
}

module.exports = parseHTML
