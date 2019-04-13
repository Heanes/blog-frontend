let url = {

  /* ****************************** common 公用 ****************************** */
  common: {
    get: {},
    post: {
      /**
       * @doc 获取基础信息，传入不同参数获取对应数据[setting, navList, announcement, friendlyLink]
       * @param params
       * @param callback
       * @returns {*}
       * @author Heanes
       * @time 2019-03-28 10:26:49 周四
       */
      queryBaseCommon: 'base/common',
      /**
       * @doc 获取头部导航
       * @param params
       * @param callback
       * @returns {*}
       */
      queryNavList: 'nav/list'
    }
  },

  /* ****************************** article 文章 ****************************** */
  article: {
    get: {},
    post: {
      /**
       * @doc 获取文章列表
       * @param params
       * @param callback
       * @returns {*}
       */
      queryArticleList: 'article/list',
      /**
       * @doc 获取文章详情
       * @param params
       * @param callback
       * @returns {*}
       */
      queryArticleDetail: 'article/detail'
    }
  },

  /* ****************************** articleCategory 文章分类 ****************************** */
  articleCategory: {
    get: {},
    post: {
      /**
       * @doc 获取文章分类列表
       * @param params
       * @param callback
       * @returns {*}
       */
      queryArticleCategoryList: 'articleCategory/list',
      /**
       * @doc 获取文章分类详情
       * @param params
       * @param callback
       * @returns {*}
       */
      queryArticleCategoryDetail: 'articleCategory/detail'
    }
  },

  /* ****************************** articleTag 文章标签 ****************************** */
  articleTag: {
    get: {},
    post: {
      /**
       * @doc 获取文章标签列表
       * @param params
       * @param callback
       * @returns {*}
       */
      queryArticleTagList: 'articleTag/list'
    }
  }
};

export default url;
