<template>
  <div class="page-wrap">
    <div class="article-list-wrap main-width">
      <!-- 文章列表 -->
      <hec-article-list :article-list="articleList.items"></hec-article-list>
      <div class="article-pager">
        <!-- 文章分页 -->
        <he-pagination v-bind="articleList.page" background :page-link="getArticlePaginationPageLink"></he-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import HecArticleList from '@/components/article/ArticleList.vue';
import http from '@/api/index.js';

export default {
  name: 'ArticlePageList',
  components: {
    HecArticleList
  },
  data () {
    return {
      pageTitle: '文章列表',
      articleQueryParam: {
        pageSize: 10,
        pageNumber: 1
      },
      articleList: {
        items: [],
        page: {
          pageNumber: 1,
          pageSize: 20
        }
      },
      allVisible: true
    }
  },
  methods: {
    /**
     * @doc 获取文章分页列表
     * @param param
     * @author Heanes
     * @time 2019-02-19 10:56:29 周二
     */
    getArticleList (param) {
      return http.article.queryArticleList(param)
        .then(response => {
          this.articleList = response.data;
        });
    },
    /**
     * @doc 文章翻页
     * @param pageNumberTo
     * @param pageNumberFrom
     * @author Heanes
     * @time 2019-02-19 10:58:26 周二
     */
    changeArticlePage (pageNumberTo, pageNumberFrom) {
      this.$router.push({path: `/article/p/${pageNumberTo}.html`});
      this.articleQueryParam.pageNumber = pageNumberTo;
    },
    /**
     * @doc 获取文章分页链接
     */
    getArticlePaginationPageLink (pageNumber) {
      return `/article/p/${pageNumber}.html`;
    },
    /**
     * @doc 文章查询参数改变后的动作
     * @param newVal
     * @param oldVal
     * @author Heanes
     * @time 2019-02-19 10:59:27 周二
     */
    changeArticleQueryParam (newVal, oldVal) {
      this.getArticleList(this.articleQueryParam);
    },

    /**
     * @doc 从路由参数中获取页码
     * @author Heanes
     * @time 2019-05-13 14:58:27 周一
     */
    getRouterArticlePageNumber () {
      return parseInt(this.$route.params.articlePageNumber ? this.$route.params.articlePageNumber : 1);
    }
  },
  created () {
    document.title = this.pageTitle;
  },
  mounted () {
    this.articleQueryParam.pageNumber = this.getRouterArticlePageNumber();
  },
  watch: {
    /**
     * @doc 监听文章查询参数，触发查询动作
     * @author Heanes
     * @time 2019-02-19 12:20:07 周二
     */
    articleQueryParam: {
      handler: function (newVal, oldVal) {
        if (!oldVal && this.getRouterArticlePageNumber() !== 1) return;
        this.changeArticleQueryParam(newVal, oldVal);
      },
      deep: true,
      immediate: true
    }
  }
}
</script>

<style scoped>

</style>
