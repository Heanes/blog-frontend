<template>
  <div class="article-list">
    <he-article-item v-for="(article, index) in articleList" v-bind="article" :key="index"></he-article-item>
  </div>
</template>

<script>
import HeArticleItem from './ArticleItem';

import '../../pages/static/css/article/list.scss'
export default {
  name: 'ArticleList',
  props: {
    articleList: {
      type: Array
    }
  },
  components: {
    'he-article-item': HeArticleItem
  }
}
</script>

<style scoped>

</style>
