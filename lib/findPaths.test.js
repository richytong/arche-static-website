const assert = require('assert')
const Test = require('thunk-test')
const path = require('path')
const findPaths = require('./findPaths')

describe('findPaths', () => {

  let allLibPaths
  it('Finds paths in a directory', async () => {
    const paths = await findPaths(__dirname)
    assert(paths.length > 0)
    allLibPaths = paths
  })

  it('Finds paths in a directory with ignore (relative path)', async () => {
    const paths = await findPaths(__dirname, {
      ignore: ['findPaths.test.js'],
    })
    assert.equal(paths.length, allLibPaths.length - 1)
  })

  it('Finds paths in a directory with ignore (absolute path)', async () => {
    const paths = await findPaths(__dirname, {
      ignore: [path.resolve(__dirname, 'findPaths.js')],
    })
    assert.equal(paths.length, allLibPaths.length - 1)
  })
})
