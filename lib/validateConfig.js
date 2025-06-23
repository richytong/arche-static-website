/**
 * @name validateConfig
 *
 * @synopsis
 * ```coffeescript [specscript]
 * validateConfig(config object) -> ()
 * ```
 */
function validateConfig(config) {
  if (typeof config.domain != 'string') {
    throw new Error('config.domain must be a string')
  }
  if (config.domain.length == 0) {
    throw new Error('config.domain cannot be empty')
  }
  if (config.domain.includes('/')) {
    throw new Error('config.domain cannot include any forward slashes ("/")')
  }
  if (!config.domain.includes('.')) {
    throw new Error('config.domain must include at least one period (".")')
  }
  if (!/^[a-z0-9]/.test(config.domain)) {
    throw new Error('config.domain must start with a lowercase alphanumeric character')
  }
  if (!/[a-z0-9]$/.test(config.domain)) {
    throw new Error('config.domain must end with a lowercase alphanumeric character')
  }
  if (/[A-Z]/g.test(config.domain)) {
    throw new Error('config.domain characters must all be lowercase')
  }

  if (typeof config.pagesDir != 'string') {
    throw new Error('config.pagesDir must be a string')
  }
  if (config.pagesDir.length == 0) {
    throw new Error('config.pagesDir cannot be empty')
  }
  if (config.pagesDir.startsWith('/')) {
    throw new Error('config.pagesDir cannot start with a forward slash ("/")')
  }
  if (config.pagesDir.endsWith('/')) {
    throw new Error('config.pagesDir cannot end with a forward slash ("/")')
  }
  if (!/^[A-Za-z0-9-_]+$/g.test(config.pagesDir)) {
    throw new Error('config.pagesDir must be a valid directory name')
  }

}

module.exports = validateConfig
