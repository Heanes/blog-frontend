import Vue from 'vue'
import Router from 'vue-router'

import ArticleArchiveList from '@/components/article/ArticleArchiveList';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/article',
  routes: [
    {
      path: '/archive.html',
      component: ArticleArchiveList
    },
    {
      path: '/dbDict-usage.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/DictUsage')
    },
    {
      path: '/dbDict-design.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/DictDesign')
    },
    {
      path: '/jetbrains-plugin-recommended.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/JetbrainsPluginRecommended')
    },
    {
      path: '/adobe-suite-download.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/AdobeSuiteDownload')
    },
    {
      path: '/jQuery-plugin-write-specification.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/JQueryPluginWriteSpecification')
    },
    {
      path: '/transform-and-transition-and-animation.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/TransformAndTransitionAndAnimation')
    },
    {
      path: '/mac-lock-screen-shortcut.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/MacLockScreenShortcut')
    },
    {
      path: '/css-writing-convention.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/CssWritingConvention')
    },
    {
      path: '/css-name-convention-bem.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/CssNameConventionBem')
    },
    {
      path: '/jQuery-plugin-write-detail.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/JQueryPluginWriteDetail')
    },
    {
      path: '/js-study-mind-map.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/JsStudyMindMap')
    },
    {
      path: '/mac-terminal-shortcut-list.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/MacTerminalShortcutList')
    },
    {
      path: '/specific-sql-write-technique.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/SpecificSqlWriteTechnique')
    },
    {
      path: '/delete-mac-launchpad-icon.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/DeleteMacLaunchpadIcon')
    },
    {
      path: '/config-php-error-log.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/ConfigPhpErrorLog')
    },
    {
      path: '/website-ssl-certificate.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/WebsiteSslCertificate')
    },
    {
      path: '/maven-download-snapshot-problem-solve.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/MavenDownloadSnapshotProblemSolve')
    },
    {
      path: '/maven-snapshot-definition.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/MavenSnapshotDefinition')
    },
    {
      path: '/idea-common-shortcut.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/IdeaShortcut')
    },
    {
      path: '/nginx-configuration-manual.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/NginxConfigurationManual.vue')
    },
    {
      path: '/js-type-judgment-and-duck-type.html',
      component: () => import(/* webpackChunkName: "article/archive/detail" */'../../_data/JsTypeJudgmentAndDuckType.vue')
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
