<template>
  <div class="article-list">
    <hec-article-list-item-meta v-for="(article, index) in articleList" v-bind="article" :key="index"></hec-article-list-item-meta>
  </div>
</template>

<script>
import HecArticleListItemMeta from './ArticleListItemMeta.vue';

import '@/assets/css/article/default/list.scss'
export default {
  name: 'ArticleList',
  props: {
    articleList: {
      type: Array
    }
  },
  components: {
    HecArticleListItemMeta
  }
}
</script>

<style scoped>

</style>
