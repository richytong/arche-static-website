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

  if (!Array.isArray(config.scripts)) {
    throw new Error('config.scripts must be an array')
  }
  for (let i = 0; i < config.scripts.length; i++) {
    const script = config.scripts[i]
    if (!script.startsWith('<script')) {
      throw new Error(`config.scripts[${i}] is not a valid HTML script tag`)
    }
    if (!script.endsWith('</script>')) {
      throw new Error(`config.scripts[${i}] is not a valid HTML script tag`)
    }
  }

  if (!Array.isArray(config.stylesheets)) {
    throw new Error('config.stylesheets must be an array')
  }
  for (let i = 0; i < config.stylesheets.length; i++) {
    const script = config.stylesheets[i]
    if (!script.startsWith('<link')) {
      throw new Error(`config.stylesheets[${i}] is not a valid HTML link tag`)
    }
    if (!script.endsWith('</link>') && !script.endsWith('/>')) {
      throw new Error(`config.stylesheets[${i}] is not a valid HTML link tag`)
    }
  }

  if (!Array.isArray(config.pages)) {
    throw new Error('config.pages must be an array')
  }
  for (let i = 0; i < config.pages.length; i++) {
    const page = config.pages[i]
    if (typeof page != 'object') {
      throw new Error(`config.pages[${i}] must be an object`)
    }
    if (typeof page.title != 'string') {
      throw new Error(`config.pages[${i}].title must be a string`)
    }
    if (typeof page.description != 'string') {
      throw new Error(`config.pages[${i}].description must be a string`)
    }
    if (typeof page.url != 'string') {
      throw new Error(`config.pages[${i}].url must be a string`)
    }
    if (page.url.length == 0) {
      throw new Error(`config.pages[${i}].url cannot be empty`)
    }
    if (!page.url.startsWith('/')) {
      throw new Error(`config.pages[${i}].url must start with a forward slash ("/")`)
    }
    if (page.url.includes('.')) {
      throw new Error(`config.pages[${i}].url cannot include any periods (".")`)
    }
    if (/[A-Z]/g.test(page.url)) {
      throw new Error(`config.pages[${i}].url characters must all be lowercase`)
    }
  }
}

module.exports = validateConfig
