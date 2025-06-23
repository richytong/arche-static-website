const ScriptTag = require('./lib/ScriptTag')
const StylesheetTag = require('./lib/StylesheetTag')

module.exports = {
  domain: 'my-domain.com',

  scripts: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.3/dist/rubico.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/rubico@2.7.3/dist/Transducer.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react@18.3.0/umd/react.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/react-dom@18.3.0/umd/react-dom.production.min.js', {
      crossorigin: true,
    }),
    ScriptTag('https://unpkg.com/arche@0.3.10/index.js', {
      crossorigin: true,
    }),
    ScriptTag('/global.js'),
  ],

  stylesheets: [
    StylesheetTag('/global.css'),
  ],

  pagesDir: 'public',

  pages: [
    {
      title: 'Arche Static Website',
      description: 'A static website built with Arche',
      url: '/',
      filepath: '/index.html',
    }
  ],
}
