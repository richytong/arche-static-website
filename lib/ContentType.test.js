const assert = require('assert')
const Test = require('thunk-test')
const path = require('path')
const ContentType = require('./ContentType')

describe('ContentType', () => {

  it('Gets the content type from the filepath and content', async () => {
    assert.equal(
      ContentType('my-page', '<!DOCTYPE html>'),
      'text/html',
    )

    assert.equal(
      ContentType('a.webmanifest', ''),
      'application/manifest+json',
    )

    assert.equal(
      ContentType('a.json', ''),
      'application/json',
    )

    assert.equal(
      ContentType('a.svg', ''),
      'image/svg+xml',
    )

    assert.equal(
      ContentType('a.js', ''),
      'text/javascript',
    )

    assert.equal(
      ContentType('a.html', ''),
      'text/html',
    )

    assert.equal(
      ContentType('a.css', ''),
      'text/css',
    )

    assert.equal(
      ContentType('a.gif', ''),
      'image/gif',
    )

    assert.equal(
      ContentType('a.jpg', ''),
      'image/jpeg',
    )

    assert.equal(
      ContentType('a.png', ''),
      'image/png',
    )

    assert.equal(
      ContentType('a.ico', ''),
      'image/x-icon',
    )

    assert.equal(
      ContentType('a.mp3', ''),
      'audio/mpeg',
    )

    assert.equal(
      ContentType('a.mp4', ''),
      'video/mp4',
    )

    assert.equal(
      ContentType('a.xml', ''),
      'text/xml',
    )

    assert.equal(
      ContentType('a.txt', ''),
      'text/plain',
    )

    assert.throws(
      () => ContentType('a.???', ''),
      new Error('unrecognized extension ???'),
    )
  })
})
