<template>
  <!--文章内容-->
  <div class="article-content" id="articleContent" v-html="content"></div>
</template>

<script>
export default {
  name: 'ArticleDetailContent',
  props: {
    content: {
      type: String,
      default: 'Article content is loading...'
    }
  }
}
</script>

<style scoped>

</style>
