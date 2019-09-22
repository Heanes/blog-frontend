<!--
 * @doc 文章归档浏览页面
 * @author Heanes
 * @time 2019-09-22 16:07:18 周日
-->
<template>
  <div class="main main-width">
    <div class="page-header">
      <p>文章归档</p>
    </div>
    <div class="page-content">
      <div class="article-list-wrap">
        <!-- 文章列表 -->
        <hec-article-list :article-list="articleCategory.articleList.items"></hec-article-list>
        <div class="article-pager">
          <!-- 文章分页 -->
          <he-pagination v-bind="articleCategory.articleList.page" background :page-link="getArticlePaginationPageLink"></he-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import http from '@/api/index.js';
import HecArticleList from '@/components/article/ArticleList.vue';

export default {
  name: 'HecPageArticleCategory',
  components: {
    HecArticleList
  },
  data () {
    return {
      pageTitle: '文章分类',
      articleCategory: {
        categoryDetail: {},
        articleList: []
      }
    }
  },
  methods: {
    getArticleCategoryDetail (param) {
      return http.articleCategory.queryArticleCategoryDetail(param)
        .then(response => {
          this.articleCategory = response.data;
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
    this.getArticleCategoryDetail();
  },
  created () {
    this.setPageTitle();
  }
}
</script>

<style scoped>

</style>
