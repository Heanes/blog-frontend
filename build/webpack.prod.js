const webpackConfig = {
  entry: require('./base/entry.config.js'),

  output: require('./product/output.product.config.js'),

  module: require('./product/module.product.config.js'),

  resolve: require('./base/resolve.config.js'),

  plugins: require('./product/plugins.product.config.js'),

  externals: require('./base/externals.config.js'),

  optimization: require('./product/optimization.product.config.js'),

  mode: 'production',

  stats: require('./product/stats.product.config.js')

};
// 构建速度分析
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

module.exports = new Promise((resolve, reject) => {
  smp.wrap(webpackConfig);

  resolve(webpackConfig);
});
