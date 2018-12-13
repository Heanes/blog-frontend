<template>
  <he-layout>
    <div class="main" slot="main">
      <div class="page-breadcrumb main-width">
        <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
      </div>
      <div class="article-list-wrap main-width">
        <!-- 文章列表 -->
        <he-article-list :article-list="articleList"></he-article-list>
        <div class="article-pager">
          <!--文章分页-->
          <he-pagination></he-pagination>
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
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章列表',
          link: 'article/list.html'
        }
      ],
      articleList: []
    }
  },
  methods: {
    getArticleList() {
      return [
        {
          title: '文章1',
          link: 'detail.html',
          author: {
            link: 'author.html',
            name: 'Heanes'
          }
        },
        {
          title: '文章2',
          link: 'detail.html',
          author: {
            link: 'author.html',
            name: 'Heanes'
          }
        }
      ];
    }
  },
  created () {
    document.title = this.pageTitle;
  },
  mounted () {
    this.articleList = this.getArticleList();
  }
}
</script>

<style scoped>

</style>
