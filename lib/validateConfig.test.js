const assert = require('assert')
const Test = require('thunk-test')
const path = require('path')
const validateConfig = require('./validateConfig')

describe('validateConfig', () => {

  it('Validates the config object', async () => {
    {
      const config = {
        domain: null,
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain must be a string'),
      )
    }

    {
      const config = {
        domain: '',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain cannot be empty'),
      )
    }

    {
      const config = {
        domain: 'www.com/',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain cannot include any forward slashes ("/")'),
      )
    }

    {
      const config = {
        domain: 'a',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain must include at least one period (".")'),
      )
    }

    {
      const config = {
        domain: '.a',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain must start with a lowercase alphanumeric character'),
      )
    }

    {
      const config = {
        domain: 'a.',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain must end with a lowercase alphanumeric character'),
      )
    }

    {
      const config = {
        domain: 'a.Aa',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.domain characters must all be lowercase'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: null,
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir must be a string'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir cannot be empty'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '/',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir cannot start with a forward slash ("/")'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a/',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir cannot end with a forward slash ("/")'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '/a',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir cannot start with a forward slash ("/")'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '.',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir must be a valid directory name'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '.a',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir must be a valid directory name'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a.',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir must be a valid directory name'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: '$a',
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.publicDir must be a valid directory name'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: null,
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.scripts must be an array'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: ['script>/script>'],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.scripts[0] is not a valid HTML script tag'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: ['<script></script>', '<script>/script'],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.scripts[1] is not a valid HTML script tag'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: null,
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.stylesheets must be an array'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: ['link']
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.stylesheets[0] is not a valid HTML link tag'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: ['<link />', '<link></link>', '<link']
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.stylesheets[2] is not a valid HTML link tag'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: null,
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages must be an array'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: ['s'],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0] must be an object'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: null }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].title must be a string'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: null }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].description must be a string'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: null }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].url must be a string'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: '' }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].url cannot be empty'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: 'a' }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].url must start with a forward slash ("/")'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: '/a.a' }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].url cannot include any periods (".")'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [
          { title: 'S', description: 'S', url: '/A' },
        ],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].url characters must all be lowercase'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: '/a', filepath: null }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].filepath must be a string'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [{ title: 'S', description: 'S', url: '/a', filepath: '' }],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[0].filepath cannot be empty'),
      )
    }

    {
      const config = {
        domain: 'a.a',
        publicDir: 'a',
        scripts: [],
        stylesheets: [],
        pages: [
          { title: 'S', description: 'S', url: '/a', filepath: '/a' },
          { title: 'S', description: 'S', url: '/a', filepath: 'a' },
        ],
      }
      assert.throws(
        () => validateConfig(config),
        new Error('config.pages[1].filepath must start with a forward slash ("/")'),
      )
    }

    validateConfig({
      domain: 'a.a',
      publicDir: 'a',
      scripts: ['<script></script>'],
      stylesheets: ['<link rel="stylesheet" href="" />'],
      pages: [],
    })

    validateConfig({
      domain: '1.a',
      publicDir: 'a',
      scripts: ['<script></script>'],
      stylesheets: ['<link rel="stylesheet" href="" />'],
      pages: [],
    })

    validateConfig({
      domain: '1.a',
      publicDir: '1',
      scripts: ['<script></script>'],
      stylesheets: ['<link rel="stylesheet" href="" />'],
      pages: [],
    })

    validateConfig({
      domain: '1.a',
      publicDir: '1-1',
      scripts: ['<script></script>'],
      stylesheets: ['<link rel="stylesheet" href="" />'],
      pages: [],
    })

    validateConfig({
      domain: '1-1.a',
      publicDir: '1-1',
      scripts: ['<script></script>'],
      stylesheets: ['<link rel="stylesheet" href="" />'],
      pages: [],
    })

  })
})
