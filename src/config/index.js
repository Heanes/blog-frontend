/**
 * @doc 站点配置文件
 * @author Heanes
 * @time 2019-04-13 21:21:40 周六
 */
export default {
  // api相关配置
  api: {
    // 环境
    env: 'production',
    // api接口地址
    apiServerUrls: {
      // mock地址
      mock: 'https://mock.dev.heanes.com',
      // 开发环境
      dev: 'http://blog.dev.heanes.com/api',
      // test地址
      test: 'http://blog.test.heanes.com/api',
      // 线上环境
      production: '/api',
      productionReal: 'https://blog.heanes.com/api'
    },
    // 返回api接口地址
    getApiServerUrl (){
      const url = this.apiServerUrls[this.env];
      return url || undefined;
    }
  }
}
