import Vue from 'vue';
import Router from 'vue-router';
import routerArticleConf from './article.router.js';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [

    /* ****************************** index 起始页 ****************************** */
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "pageIndex" */ '../views/index/PageIndex.vue')
    },
    /* ****************************** article 文章 ****************************** */
    ...routerArticleConf,

    /* ****************************** about 关于 ****************************** */
    {
      path: '/about.html',
      name: 'about',
      component: () => import(/* webpackChunkName: "pageAbout" */ '../views/about/PageAbout.vue')
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
