import Vue from 'vue';
import Router from 'vue-router';
import routerArticleConf from './article.router.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    /* ****************************** about 关于 ****************************** */
    {
      path: '/about.html',
      name: 'about',
      component: () => import(/* webpackChunkName: "pageAbout" */ '../views/about/PageAbout.vue')
    },

    /* ****************************** sitemap 网站地图 ****************************** */
    {
      path: '/sitemap.html',
      name: 'sitemap',
      component: () => import(/* webpackChunkName: "sitemap" */ '../views/about/PageAbout.vue')
    },

    /* ****************************** archive 归档 ****************************** */
    {
      path: '/archive.html',
      name: 'archive',
      component: () => import(/* webpackChunkName: "archive" */ '../views/archive/PageArchive.vue')
    },

    /* ****************************** index 起始页 ****************************** */
    {
      path: '/',
      component: () => import(/* webpackChunkName: "pageIndex" */ '../views/index/PageIndex.vue'),
      children: [
        // 默认匹配文章列表和详情
        {
          path: '',
          component: () => import(/* webpackChunkName: "articlePageList" */ '../views/index/Index.vue')
        },
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
    /* ****************************** article 文章 ****************************** */
    ...routerArticleConf,

    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ '../views/common/404/style1.vue')
    }
  ],
  // 记录之前保存的滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
})
