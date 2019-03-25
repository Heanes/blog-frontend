const pluginsConfig = require('../base/plugins.config.js');

const webpack = require('webpack');

pluginsConfig.push(
  new webpack.HotModuleReplacementPlugin(),

  new webpack.NoEmitOnErrorsPlugin()
);

module.exports = pluginsConfig;
