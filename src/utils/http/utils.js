import http from './http.js'
export default {
  /**
   * @doc 装载api，生成方法
   * @param apiConfig api配置
   * @param serverBasePath 基础url
   */
  loadApiConfig (apiConfig, serverBasePath = '') {
    const apiGroups = Object.keys(apiConfig);
    const apis = {};
    apiGroups.forEach(group => {
      const apiConfigItem = apiConfig[group];
      // console.log(apiConfigItem);
      const allApis = {};
      if (apiConfigItem) {
        const apiConfigType = Object.keys(apiConfigItem);
        // console.log(apiConfigType);
        apiConfigType.forEach(type => {
          http.makeApiMethod(apiConfigItem[type], serverBasePath, allApis, type)
        });
      }
      apis[group] = allApis
    });
    // console.log(apis);
    return apis;
  }
}
