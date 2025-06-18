const ScriptTag = require('./ScriptTag')
const StylesheetTag = require('./StylesheetTag')

module.exports = {
  domain: 'my-domain.com',

  scriptDependencies: [
    ScriptTag('https://cdn.jsdelivr.net/npm/rubico@2.7.3/dist/rubico.min.js', {
      crossorigin: true,
      async: true,
    }),
    ScriptTag('https://unpkg.com/rubico@2.7.3/dist/Transducer.min.js', {
      crossorigin: true,
      async: true,
    }),
  ],

  stylesheets: [
    StylesheetTag('/app.css'),
  ],
}
