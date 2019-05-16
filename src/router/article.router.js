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
        path: 'p/:articleCategoryPageNumber.html',
        component: () => import(/* webpackChunkName: "articlePageList" */ '../views/article/ArticlePageList.vue')
      },
      // 文章详情
      {
        path: ':articleQueryParam.html',
        component: () => import(/* webpackChunkName: "articleDetail" */ '../views/article/ArticlePageList.vue')
      }
    ]
  }
];
