export default [
  /* ****************************** archive 归档 ****************************** */
  {
    path: '/articleArchive.html',
    name: 'articleArchive',
    component: () => import(/* webpackChunkName: "articleArchive" */ '../views/articleArchive/PageArticleArchive.vue')
  },

  /* ****************************** article 文章 ****************************** */
  {
    path: '/article',
    name: 'article',
    component: () => import(/* webpackChunkName: "article" */ '../views/article/PageArticle.vue'),
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
    component: () => import(/* webpackChunkName: "articleCategory" */ '../views/articleCategory/PageArticleCategory.vue'),
    children: [
      // 文章分类翻页
      {
        path: ':articleCategoryCode/p/:articleCategoryPageNumber.html',
        component: () => import(/* webpackChunkName: "articleCategoryPageList" */ '../views/articleCategory/PageArticleCategory.vue')
      },
      // 文章分类信息
      {
        path: ':articleCategoryCode.html',
        component: () => import(/* webpackChunkName: "articleCategoryArticleList" */ '../views/article/ArticlePageList.vue')
      }
    ]
  },
  /* ****************************** articleTag 文章标签类 ****************************** */
  {
    path: '/articleTag',
    name: 'articleTag',
    component: () => import(/* webpackChunkName: "articleTag" */ '../views/articleTag/PageArticleTag.vue'),
    children: [
      // 文章标签翻页
      {
        path: ':articleTagCode/p/:articleTagPageNumber.html',
        component: () => import(/* webpackChunkName: "articleTagPageList" */ '../views/articleTag/PageArticleTag.vue')
      },
      // 文章标签信息
      {
        path: ':articleQueryParam.html',
        component: () => import(/* webpackChunkName: "articleTagArticleList" */ '../views/article/ArticlePageList.vue')
      }
    ]
  }
];
