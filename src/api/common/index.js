import API from '../ajax';

export default {

  /**
   * @doc 获取基础信息，传入不同参数获取对应数据[setting, navList, announcement, friendlyLink]
   * @param params
   * @param callback
   * @returns {*}
   * @author Heanes
   * @time 2019-03-28 10:26:49 周四
   */
  getBaseCommon (params, callback) {
    return API.get('base/common', params, callback);
  },

  /**
   * @doc 获取头部导航
   * @param params
   * @param callback
   * @returns {*}
   */
  getNavList (params, callback) {
    return API.get('nav/list', params, callback);
  }

};
