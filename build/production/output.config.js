const config = require('../config/config.js');

module.exports = {
  filename: `${config.dirs.staticDirName}/js/[name].[contenthash:8].js`,
  publicPath: '/',
  path: config.dirs.distDir
};
