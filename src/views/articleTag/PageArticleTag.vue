<!--
 * @doc 文章分类浏览页面
 * @author Heanes
 * @time 2019-09-22 00:26:54 周日
-->
<template>
  <div class="main main-width">
    <div class="page-header">
      <p>正在显示标签{{articleTag.tagDetail.name}}的文章</p>
    </div>
    <div class="page-content">
      <div class="article-list-wrap">
        <!-- 文章列表 -->
        <hec-article-list :article-list="articleTag.articleList.items"></hec-article-list>
        <div class="article-pager">
          <!-- 文章分页 -->
          <he-pagination v-bind="articleTag.articleList.page" background :page-link="getArticlePaginationPageLink"></he-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/index.js';
import HecArticleList from '@/components/article/ArticleList.vue';

export default {
  name: 'HecPageArticleTag',
  components: {
    HecArticleList
  },
  data () {
    return {
      pageTitle: '文章标签',
      articleTag: {
        tagDetail: {},
        articleList: []
      }
    }
  },
  methods: {
    getArticleTagDetail (param) {
      return http.articleTag.queryArticleTagDetail(param)
        .then(response => {
          this.articleTag = response.data;
        });
    },
    /**
     * @doc 获取文章分页链接
     */
    getArticlePaginationPageLink (pageNumber) {
      return `/p/${pageNumber}.html`;
    }
  },
  mounted(){
    this.getArticleTagDetail();
  },
  created () {
    this.setPageTitle();
  }
}
</script>

<style scoped>

</style>
