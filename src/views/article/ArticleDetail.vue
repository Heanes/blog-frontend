<template>
  <div class="main">
    <div class="page-wrap">
      <div class="article-detail main-width">
        <div class="article-title-wrap">
          <!-- 文章标题 -->
          <div class="article-title">
            <h1 class="entry-title" v-html="articleDetail.title"></h1>
          </div>
        </div>
        <div class="article-content" id="articleContent" v-html="articleDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/article/default/detail.scss';
import '@/assets/css/article/default/default.scss';
import http from '@/api/index';

export default {
  name: 'ArticleDetail',
  data () {
    return {
      pageTitle: '文章详情',
      articleDetailQueryParam: {},
      articleDetail: {}
    }
  },
  methods: {
    /**
     * @doc 从路由参数中获取文章详情参数
     * @author Heanes
     * @time 2019-05-13 14:58:27 周一
     */
    getRouterArticleDetailParam () {
      return this.$route.params.articleQueryParam;
    },
    /**
     * @doc 获取文章详情
     * @param param
     */
    getArticleDetail (param) {
      return http.article.queryArticleDetail(param)
        .then(response => {
          this.articleDetail = response.data;
        });
    }
  },
  created () {
  },
  mounted () {
    this.articleDetailQueryParam = {
      param: this.getRouterArticleDetailParam()
    };
    this.getArticleDetail(this.articleDetailQueryParam).then(() => {
      document.title = `${this.pageTitle} - ${this.articleDetail.title}`;
    });
  }
}
</script>

<style scoped>

</style>
