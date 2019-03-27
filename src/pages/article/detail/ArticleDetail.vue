<template>
  <he-layout>
    <div class="main article-detail-page" slot="main">
      <div class="page-breadcrumb main-width">
        <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
      </div>
      <div class="main-content main-width clearfix">
        <!--文章详情-->
        <div class="main-area article-wrap">
          <div class="center-content">
            <div class="article-detail">
              <!-- 标题区域 -->
              <div class="article-title-wrap">
                <!-- 文章标题 -->
                <div class="article-title">
                  <h1 class="entry-title" v-html="article.title"></h1>
                </div>
                <!-- 文章相关属性信息 -->
                <div class="article-info">
                  <dl class="article-info-dl">
                    <dt>点击:</dt>
                    <dd>{{article.clickCount}}</dd>
                    <dt><a href="#comment-list" class="comment-count">评论:</a></dt>
                    <dd><a href="#comment-list" class="comment-count">{{article.commentCount}}</a></dd>
                    <dt>作者:</dt>
                    <dd v-if="article.author !== undefined">{{article.author.name}}</dd>
                    <dt>时间:</dt>
                    <dd>{{article.publishTimeFormative}}</dd>
                    <dt>来源:</dt>
                    <dd>原创</dd>
                  </dl>
                </div>
              </div>

              <!-- 文章工具栏操作区 -->
              <div class="article-toolbar-top">
                <span class="op-item op-to-small-text" id="opToSmallTextBtn" title="减小正文字体">T</span>
                <span class="op-item op-to-large-text" id="opToLargeTextBtn" title="增大正文字体">T</span>
              </div>

              <!-- 标题占位区域 -->
              <div class="article-title-block-placeholder" id="articleTitleBlockPlaceholder"></div>

              <!-- 文章内容 -->
              <div class="article-content" id="articleContent" v-html="article.content"></div>
            </div>
          </div>
        </div>
        <!--文章右侧-->
        <div class="sidebar-right">
          <div class="article-catalog-wrap" id="articleCatalog"></div>
        </div>
      </div>
    </div>
  </he-layout>
</template>

<script>
import HeLayout from '../../_layout/normal/Layout';
import HeBreadcrumb from '@/components/common/Breadcrumb';
import api from '@/api';

import jQuery from 'jquery';
import '~/public/static/vendor/autoCatalog/1.0.0/js/autoCatalog.js';
import '~/public/static/vendor/autoCatalog/1.0.0/css/autoCatalog.css';

import '@/pages/static/css/article/detail.scss'
import '@/pages/static/css/common/responsive.scss';

export default {
  name: 'ArticleDetail',
  components: {
    'he-layout': HeLayout,
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
          name: '文章列表',
          link: 'list.html'
        },
        {
          name: '文章详情',
          link: ''
        }
      ],
      articleQueryParam: '',
      article: {
        title: 'Article title is loading...',
        content: 'Article content is loading...',
        other: '<h1>title</h1>',
        author: {}
      }
    }
  },
  methods: {
    /**
     * @doc 获取文章分页列表
     * @param param
     * @author Heanes
     * @time 2019-02-19 10:56:29 周二
     */
    getArticleDetail(param) {
      api.article.getDetail(param)
        .then(response => {
          this.article = response.data;
        });
    },
    /**
     * @doc 生成文章导航目录
     * @author Heanes
     * @time 2019-03-01 16:28:41 周五
     */
    generateCatalog() {
      console.log('generateCatalog');
      jQuery('#articleContent').autoCatalog({
        catalogContainer: jQuery('#articleCatalog'), // 放置生成目录的容器dom
        formatChapterAnchor: function (chapter) {
          return chapter.outline.join('.') + '.' + chapter.text;
        },
        step: 90,
        alwaysShow: true
      });
    }

  },
  mounted () {
    this.articleQueryParam = {
      param: this.$route.params.articleQueryParam
    };
  },
  created () {
    document.title = this.pageTitle;
  },
  watch: {
    /**
     * @doc 文章查询参数变化，请求文章数据接口
     * @author Heanes
     * @time 2019-03-01 16:28:07 周五
     */
    'articleQueryParam': {
      handler: function (newVal, oldVal) {
        this.getArticleDetail({params: this.articleQueryParam});
      }
    },
    /**
     * @doc 文章内容变动，相应更新
     * @author Heanes
     * @time 2019-03-01 11:35:28 周五
     */
    'article.content': {
      handler: function (newVal, oldVal) {
        // 更新文章导航目录
        this.$nextTick(() => {
          this.generateCatalog();
        });
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>
