import Vue from 'vue'
import Router from 'vue-router'

import ArticleArchive from '@/components/article/ArticleArchiveList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: 'article',
  routes: [
    {
      path: '/',
      component: ArticleArchive
    },
    {
      path: '/archive.html',
      component: ArticleArchive
    },
    // 元素示例
    {
      path: '/elementDemo.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/dbDict-usage.html',
      component: () => import('../../_data/DictUsage')
    },
    {
      path: '/dbDict-design.html',
      component: () => import('../../_data/DictDesign')
    },
    {
      path: '/jetbrains-plugin-recommended.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/adobe-suite-download.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/jQuery-plugin-write-specification.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/transform-and-transition-and-animation.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/mac-lock-screen-shortcut.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/css-writing-convention.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/css-name-convention-bem.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/jQuery-plugin-write-detail.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/js-study-mind-map.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/mac-terminal-shortcut-list.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/specific-sql-write-technique.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/delete-mac-launchpad-icon.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/config-php-error-log.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/website-ssl-certificate.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/maven-download-snapshot-problem-solve.html',
      component: () => import('../../_data/ArticleElementDemo')
    },
    {
      path: '/maven-snapshot-definition.html',
      component: () => import('../../_data/ArticleElementDemo')
    }
  ]
})
