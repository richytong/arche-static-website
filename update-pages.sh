#!/usr/bin/env node

const fs = require('fs')
const findPaths = require('./lib/findPaths')
const PageHTML = require('./lib/PageHTML')
const parseHTML = require('./lib/parseHTML')
const config = require('./config')

const {
  domain,
  scriptDependencies,
  stylesheets,
  pagesDirectory,
  pages,
} = config

/**
 * @name main
 *
 * @synopsis
 * ```coffeescript [specscript]
 * main() -> Promise<>
 * ```
 */
async function main() {
  const paths = await findPaths(`${__dirname}/${pagesDirectory}`, {
    ignore: ['*.css', '*.js'],
  })

  for (const path of paths) {
    const pageFilepath = path.replace(`${__dirname}/${pagesDirectory}`, '')
    const content = await fs.promises.readFile(path)
    const page = pages.find(page => page.filepath == pageFilepath)

    if (page == null) {
      console.error(content)
      throw new Error(`page not found in config: ${pageFilepath}`)
    }

    const { title, description, url } = page

    const $ = parseHTML(content)
    const bodyHTML = $('body').html().trim()

    console.log('Updating page', path)

    await fs.promises.writeFile(path, PageHTML({
      title,
      description,
      url: `https://${domain}${url}`,
      scriptDependencies,
      stylesheets,
      bodyHTML,
    }))
  }

}

main()
