/**
 * @doc article 文章模块相关url
 * @author Heanes
 * @time 2019-05-15 15:04:51 周三
 */

export default {
  /* ****************************** common 公用 ****************************** */
  common: {
    get: {},
    post: {
      /**
       * @doc 获取基础信息，传入不同参数获取对应数据[setting, navList, announcement, friendlyLink]
       * @author Heanes
       * @time 2019-03-28 10:26:49 周四
       */
      queryBaseCommon: '/base/common',
      /**
       * @doc 获取头部导航
       */
      queryNavList: '/nav/list'
    }
  }
}
