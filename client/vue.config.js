const path = require('path');

module.exports = {
  outputDir: path.resolve(__dirname, 'build'),
  transpileDependencies: [
    'vuetify'
  ]
}
