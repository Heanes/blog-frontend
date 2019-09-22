/**
 * @doc article 文章模块相关url
 * @author Heanes
 * @time 2019-05-15 15:09:51 周三
 */
export default {
  /* ****************************** article 文章 ****************************** */
  article: {
    get: {
    },
    post: {
      /**
       * @doc 获取文章列表
       */
      queryArticleList: '/article/list',
      /**
       * @doc 获取文章详情
       */
      queryArticleDetail: '/article/detail'
    }
  },

  /* ****************************** articleCategory 文章分类 ****************************** */
  articleCategory: {
    get: {},
    post: {
      /**
       * @doc 获取文章分类列表
       */
      queryArticleCategoryList: '/articleCategory/list',
      /**
       * @doc 获取文章分类详情
       */
      queryArticleCategoryDetail: '/articleCategory/detail'
    }
  },

  /* ****************************** articleTag 文章标签 ****************************** */
  articleTag: {
    get: {},
    post: {
      /**
       * @doc 获取文章标签列表
       */
      queryArticleTagList: '/articleTag/list',
      /**
       * @doc 获取文章标签详情
       */
      queryArticleTagDetail: '/articleTag/detail'
    }
  }
}
