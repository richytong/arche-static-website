const { JSDOM, VirtualConsole } = require('jsdom')
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
  const virtualConsole = new VirtualConsole()
  const dom = new JSDOM(html, { virtualConsole })
  const $ = jquery(dom.window)
  return $
}

module.exports = parseHTML
