<template>
  <div class="main article-detail-page">
    <div class="page-breadcrumb main-width">
      <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
    </div>
    <div class="main-content main-width clearfix">
      <!--文章详情-->
      <div class="main-area article-wrap">
        <div class="center-content">
          <div class="article-detail">
            <!-- 标题区域 -->
            <he-article-detail-title>
              <slot name="articleTitle" slot="articleTitle"></slot>
            </he-article-detail-title>

            <!-- 文章工具栏操作区 -->
            <div class="article-toolbar-top">
              <span class="op-item op-to-small-text" id="opToSmallTextBtn" title="减小正文字体">T</span>
              <span class="op-item op-to-large-text" id="opToLargeTextBtn" title="增大正文字体">T</span>
            </div>

            <!-- 占位区域 -->
            <div class="article-title-block-placeholder" id="articleTitleBlockPlaceholder"></div>

            <!-- 详情区域 -->
            <he-article-detail-content>
              <slot name="articleContent" slot="articleContent"></slot>
            </he-article-detail-content>
          </div>

        </div>
      </div>
      <!--文章右侧-->
      <div class="sidebar-right">
        <div class="article-catalog-wrap" id="articleCatalog"></div>
      </div>
    </div>
  </div>
</template>

<script>
import HeBreadcrumb from '@/components/common/Breadcrumb';
import HeArticleDetailContent from '@/components/article/ArticleDetailContent';
import HeArticleDetailTitle from '@/components/article/ArticleDetailTitle';

import jQuery from 'jquery';
import '~/public/static/vendor/autoCatalog/1.0.0/dist/js/autoCatalog.js';
import '~/public/static/vendor/autoCatalog/1.0.0/dist/css/autoCatalog.css';

import '@/pages/static/css/article/detail.scss'
import '@/pages/static/css/common/responsive.scss';

export default {
  name: 'ArticleDetail',
  components: {
    'he-breadcrumb': HeBreadcrumb,
    'he-article-detail-title': HeArticleDetailTitle,
    'he-article-detail-content': HeArticleDetailContent
  },
  data () {
    return {
      pageTitle: '文章详情',
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章索引',
          link: 'archive.html'
        },
        {
          name: '文章详情',
          link: ''
        }
      ]
    }
  },
  mounted () {
    jQuery('#articleContent').autoCatalog({
      catalogContainer: jQuery('#articleCatalog'), // 放置生成目录的容器dom
      formatChapterAnchor: function (chapter) {
        return chapter.outline.join('.') + '.' + chapter.text;
      },
      step: 90,
      alwaysShow: true
    });
  },
  created () {
    document.title = this.pageTitle;
  }
}
</script>

<style scoped>

</style>
