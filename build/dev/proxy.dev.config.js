module.exports = {
  // 代理第三方静态资源
  '/public/static/vendor/': {
    target: 'https://cdn.dev.heanes.com',
    pathRewrite: {'^/public/static/vendor/': 'js'},
    changeOrigin: true // 可否跨域
  },
  // 代理api接口
  '/api/': {
    // target: 'http://localhost:10086',
    target: 'http://blog.dev.heanes.com:8001',
    // pathRewrite: {'^/api/': '/'},
    changeOrigin: true
  }
};
