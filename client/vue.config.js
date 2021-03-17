const path = require('path');

/** @type { import('@vue/cli-service').ProjectOptions } */
const vueBuildConfig = {
  outputDir: path.resolve(__dirname, 'build'),
  
  pluginOptions: {
    autoRouting: {
      chunkNamePrefix: 'page-'
    }
  }
};

module.exports = vueBuildConfig;
