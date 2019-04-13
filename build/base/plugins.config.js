const dirVars = require('./dirVars.config.js');
const buildConfig = require('../config.js');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

let pageEntries = require('./pageEntries.config');
let pluginBanner = require('./pluginBanner.config');

let htmlWebpackPluginArr = [];

pageEntries.forEach(item => {
  // console.log('item', item);

  let htmlFileName = `${item}.html`;

  let templateName = 'src/public/index.html';
  // 不同环境不同模版
  if(buildConfig.buildTarget === 'dev') {
    templateName = 'src/public/index.dev.html';
  }

  let htmlWebpackPluginOption = {
    filename: htmlFileName,
    template: templateName,
    chunks: ['manifest', 'vendors', 'common'],
    // hash: true, // 为静态资源生成hash值
    xhtml: true,
    baseUrl: '../'
  };

  htmlWebpackPluginOption.chunks.push(item);

  // console.log(htmlWebpackPluginOption);

  // 如果子页面下有html文件，则使用此html作为template，否则使用默认公共模版
  htmlWebpackPluginArr.push(
    new HtmlWebpackPlugin(htmlWebpackPluginOption)
  );
  // console.log('\n');
});

// 构建 文件大小分析
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

// 多线程构建
//const HappyPack = require('happypack');

let plugins = [
  // 清理构建目录
  new CleanWebpackPlugin(),

  // 添加banner
  // pluginBanner,
  new VueLoaderPlugin(),

  // 输出html
  ...htmlWebpackPluginArr,

  // 将对象暴露给webpack
  new webpack.ProvidePlugin({
    jQuery: 'jquery'
  }),

  // copy custom static assets
  new CopyWebpackPlugin([
    {
      from: dirVars.rootDir + '/public',
      to: 'public',
      ignore: ['.*'],
      cache: true
    }
  ])

  /* new BundleAnalyzerPlugin({
    analyzerMode: 'server',
    analyzerHost: '127.0.0.1',
    analyzerPort: 8888,
    reportFilename: 'report.html',
    defaultSizes: 'parsed',
    openAnalyzer: true,
    generateStatsFile: false,
    statsFilename: 'stats.json',
    logLevel: 'info'
  }) */
];

module.exports = plugins;
