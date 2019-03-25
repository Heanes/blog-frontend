const dirVars = require('../base/dirVars.config.js');

const proxyConfig = require('./proxy.dev.config.js');
const config = require('../config');

let devServer = {
  contentBase: dirVars.distDir,
  // publicPath:'http://localhost:8080/',
  disableHostCheck: true,
  host: config.dev.host,
  port: config.dev.port,
  open: config.dev.autoOpenBrowser,    // 自动打开起浏览器
  hot: true,                  // 热加载
  hotOnly: true,
  compress: true,
  inline: true,               // 可以监控js变化
  clientLogLevel: 'warning',  // 热更新时console日志简化
  quiet: true,                // 简化控制台输出信息 necessary for FriendlyErrorsPlugin
  // 代理
  proxy: proxyConfig,
  overlay: config.dev.errorOverlay        // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。
    ? {warnings: false, errors: true}
    : false,
  // 使用history模式后，本地刷新页面后cannot get问题解决
  historyApiFallback: {
    rewrites: [
      // 文章详情
      { from: /^\/article/, to: '/article/detail.html' },
      // 文章归档
      { from: /^\/article\/archive/, to: '/article/archive.html' },
      // 404页面
      { from: /./, to: '/404.html' }
    ]
  }
};
module.exports = devServer;
