<template>
  <div>
    <div class="main article-detail-page" slot="main">
      <div class="page-breadcrumb main-width">
        <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
      </div>
      <div class="main-content main-width clearfix">
        <!--文章详情-->
        <div class="main-area article-wrap">
          <!-- 标题区域 -->
          <div class="article-title-wrap">
            <!-- 文章标题 -->
            <div class="article-title">
              <h1 class="entry-title">dbDict设计说明</h1>
            </div>
            <!-- 文章相关属性信息 -->
            <div class="article-info">
              <dl class="article-info-dl">
                <dt>点击:</dt>
                <dd>987</dd>
                <dt><a href="#comment-list" class="comment-count">评论:</a></dt>
                <dd><a href="#comment-list" class="comment-count">2</a></dd>
                <dt>作者:</dt>
                <dd>Heanes</dd>
                <dt>责编:</dt>
                <dd>Heanes</dd>
                <dt>时间:</dt>
                <dd>2015-05-19 09:46:35</dd>
                <dt>来源:</dt>
                <dd>原创</dd>
              </dl>
            </div>
            <div class="article-operate">
              <span class="op-item op-to-small-text" id="opToSmallTextBtn" title="减小正文字体">T</span>
              <span class="op-item op-to-large-text" id="opToLargeTextBtn" title="增大正文字体">T</span>
            </div>
          </div>
          <div class="article-title-block-placeholder" id="articleTitleBlockPlaceholder"></div>
          <!-- 详情区域 -->
          <div class="article-content" id="articleContent">
            <h2>数据字典整体流程图</h2>
            <div class="img-wrap" style="max-width:1263px;">
              <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fonaylvmblj31kw12nmyj.jpg" class="img-2x img-show" title="Design process picture" alt="Design process picture">
              <p class="img-desc">设计流程图</p>
            </div>
          </div>
        </div>
        <!--文章右侧-->
        <div class="sidebar-right">
          <div class="article-catalog-wrap" id="articleCatalog"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeBreadcrumb from '@/components/common/Breadcrumb';

import jQuery from 'jquery';
import '~/public/static/vendor/autoCatalog/1.0.0/js/autoCatalog.js';
import '~/public/static/vendor/autoCatalog/1.0.0/css/autoCatalog.css';

import '../../static/css/article/detail.scss'
import '../../static/css/common/responsive.scss';

export default {
  name: 'DictUsage',
  components: {
    'he-breadcrumb': HeBreadcrumb
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
