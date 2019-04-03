import API from '../ajax';

export default {

  /* ****************************** article 文章 ****************************** */
  /**
   * @doc 获取文章列表
   * @param params
   * @param callback
   * @returns {*}
   */
  getList (params, callback) {
    return API.get('article/list', params, callback);
  },

  /**
   * @doc 获取文章详情
   * @param params
   * @param callback
   * @returns {*}
   */
  getDetail (params, callback) {
    return API.get('article/detail', params, callback);
  },

  /* ****************************** articleCategory 文章分类 ****************************** */
  /**
   * @doc 获取文章分类列表
   * @param params
   * @param callback
   * @returns {*}
   */
  getArticleCategoryList (params, callback) {
    return API.get('articleCategory/list', params, callback);
  },
  /**
   * @doc 获取文章分类详情
   * @param params
   * @param callback
   * @returns {*}
   */
  getArticleCategoryDetail (params, callback) {
    return API.get('articleCategory/detail', params, callback);
  },

  /* ****************************** articleTag 文章标签 ****************************** */
  /**
   * @doc 获取文章标签列表
   * @param params
   * @param callback
   * @returns {*}
   */
  getArticleTagList (params, callback) {
    return API.get('articleTag/list', params, callback);
  }
};
