<template>
  <he-layout>
    <div class="main" slot="main">
      <div class="page-breadcrumb main-width">
        <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
      </div>
      <div class="article-list-wrap main-width">
        <!-- 文章列表 -->
        <he-article-list :article-list="articleList.items"></he-article-list>
        <div class="article-pager">
          <!--文章分页-->
          <he-pagination v-bind="articleList.page" @change-page-number="changeArticlePage"></he-pagination>
        </div>
      </div>
    </div>
  </he-layout>
</template>

<script>
import HeLayout from '../../_layout/normal/Layout';
import HeBreadcrumb from '@/components/common/Breadcrumb';
import HePagination from '@/components/common/Pagination';
import HeArticleList from '@/components/article/ArticleList';

import '../../static/css/article/list.scss';
import '../../static/css/common/responsive.scss';

import api from '@/api';

export default {
  name: 'ArticleList',
  components: {
    'he-layout': HeLayout,
    'he-breadcrumb': HeBreadcrumb,
    'he-article-list': HeArticleList,
    'he-pagination': HePagination
  },
  data () {
    return {
      pageTitle: '文章列表',
      articleQueryParam: {
        pageSize: 10,
        pageNumber: 1
      },
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章列表',
          link: '/article/list.html'
        }
      ],
      articleList: {
        items: [],
        page: {
          pageNumber: 1,
          pageSize: 20
        }
      }
    }
  },
  computed: {
  },
  methods: {
    /**
     * @doc 获取文章分页列表
     * @param param
     * @author Heanes
     * @time 2019-02-19 10:56:29 周二
     */
    getArticleList(param) {
      api.article.getList(param)
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
    changeArticlePage(pageNumberTo, pageNumberFrom){
      this.articleQueryParam.pageNumber = pageNumberTo;
    },
    /**
     * @doc 文章查询参数改变后的动作
     * @param newVal
     * @param oldVal
     * @author Heanes
     * @time 2019-02-19 10:59:27 周二
     */
    changeArticleQueryParam(newVal, oldVal){
      this.getArticleList({params: this.articleQueryParam});
    }
  },
  created () {
    document.title = this.pageTitle;
  },
  mounted () {
  },
  watch: {
    /**
     * @doc 监听文章查询参数，触发查询动作
     * @author Heanes
     * @time 2019-02-19 12:20:07 周二
     */
    articleQueryParam: {
      handler: function (newVal, oldVal){
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
