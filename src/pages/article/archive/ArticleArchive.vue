<!--
@doc 文章归档页面
@author Heanes
@time 2018-12-13 18:22:34 周四
-->
<template>
  <he-layout>
    <router-view slot="main"></router-view>
  </he-layout>
</template>

<script>
import HeLayout from '../../_layout/normal/Layout';

import '../../static/css/article/archive.scss';
import '../../static/css/common/responsive.scss';

export default {
  name: 'ArticleArchive',
  components: {
    'he-layout': HeLayout
  },
  data () {
    return {
      pageTitle: '文章索引',
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章索引',
          link: 'article/archive.html'
        }
      ]
    }
  },
  mounted () {
    console.log(this.$route.params.articleQueryParam);
  },
  created () {
    document.title = this.pageTitle;
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      if (to.path !== '/archive.html') {
        // console.log('非索引页');
      }
    }
  }
}
</script>

<style scoped>

</style>
