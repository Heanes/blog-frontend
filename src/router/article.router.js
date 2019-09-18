export default [
  /* ****************************** article 文章 ****************************** */
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "pageArticle" */ '../views/article/PageArticle.vue'),
    children: [
      // 文章翻页
      {
        path: 'p/:articlePageNumber.html',
        component: () => import(/* webpackChunkName: "articlePageList" */ '../views/article/ArticlePageList.vue')
      },
      // 文章详情
      {
        path: ':articleQueryParam.html',
        component: () => import(/* webpackChunkName: "articleDetail" */ '../views/article/ArticleDetail.vue')
      }
    ]
  },
  /* ****************************** articleCategory 文章分类 ****************************** */
  {
    path: '/articleCategory',
    name: 'articleCategory',
    component: () => import(/* webpackChunkName: "pageArticleCategory" */ '../views/article/PageArticle.vue'),
    children: [
      // 文章分类翻页
      {
        path: ':articleCategoryCode/p/:articleCategoryPageNumber.html',
        // component: () => import(/* webpackChunkName: "articleCategoryPageList" */ '../views/article/ArticlePageList.vue')
        component: () => import(/* webpackChunkName: "articleCategoryPageList" */ '../views/articleCategory/PageArticleCategory.vue')
      },
      // 文章详情
      {
        path: ':articleQueryParam.html',
        component: () => import(/* webpackChunkName: "articleCategoryArticleList" */ '../views/article/ArticlePageList.vue')
      }
    ]
  },
  /* ****************************** articleTag 文章标签类 ****************************** */
  {
    path: '/articleTag',
    name: 'articleTag',
    component: () => import(/* webpackChunkName: "pageArticleTag" */ '../views/articleTag/PageArticleTag.vue'),
    children: [
      // 文章分类翻页
      {
        path: ':articleCategoryCode/p/:articleCategoryPageNumber.html',
        // component: () => import(/* webpackChunkName: "articleCategoryPageList" */ '../views/article/ArticlePageList.vue')
        component: () => import(/* webpackChunkName: "articleCategoryPageList" */ '../views/articleCategory/PageArticleCategory.vue')
      },
      // 文章详情
      {
        path: ':articleQueryParam.html',
        component: () => import(/* webpackChunkName: "articleCategoryArticleList" */ '../views/article/ArticlePageList.vue')
      }
    ]
  },

  /* ****************************** archive 归档 ****************************** */
  {
    path: '/articleArchive.html',
    name: 'articleArchive',
    component: () => import(/* webpackChunkName: "articleArchive" */ '../views/archive/PageArchive.vue')
  }
];
