/**
 * @doc 站点配置文件
 * @author Heanes
 * @time 2019-04-13 21:21:40 周六
 */
export default {
  // 环境
  env: 'production',
  // api接口地址
  apiServerUrls: {
    // 开发环境
    dev: '/api/',
    // mock地址
    mock: 'http://localhost:10086/',
    // test地址
    test: 'http://blog.dev.heanes.com/api/',
    // 线上环境
    production: '/api/'
  },
  // 返回api接口地址
  getApiServerUrl (){
    return this.apiServerUrls[this.env];
  }
}
