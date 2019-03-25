import Vue from 'vue'
import Router from 'vue-router'

import ArticleDetail from '@/components/article/ArticleDetail';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/article',
  routes: [
    {
      path: '/:articleQueryParam?.html',
      // component: ArticleDetail
    }
  ],
  // 记录之前保存的滚动条位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }

})
