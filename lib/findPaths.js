const fs = require('fs/promises')
const path = require('path')
const { minimatch } = require('minimatch')

/**
 * @name findPaths
 *
 * @synopsis
 * ```coffeescript [specscript]
 * findPaths(dir string, options? {
 *   ignore: Array<string>, // names or paths
 * }) -> Promise<Array<string>>
 * ```
 *
 * @description
 * ```javascript
 * findPaths('./my/path/', {
 *   ignore: ['node_modules', '.github'],
 * }) // -> Promise<paths Array<string>>
 * ```
 */
const findPaths = async function (dir, options = {}) {
  const { ignore = [] } = options
  const absPath = path.resolve(dir)
  const dirents = await fs.readdir(absPath, { withFileTypes: true })
  const result = []

  for (const dirent of dirents) {
    const name = dirent.name
    const dirPath = path.resolve(dir, name)
    let shouldIgnore = false
    for (const pattern of ignore) {
      if (minimatch(dirPath, pattern) || minimatch(name, pattern)) {
        shouldIgnore = true
        break
      }
    }

    if (shouldIgnore) {
      continue
    }

    if (dirent.isDirectory()) {
      const subPaths = await findPaths(dirPath, options)
      result.push(...subPaths)
    } else {
      result.push(dirPath)
    }
  }

  return result
}

module.exports = findPaths
