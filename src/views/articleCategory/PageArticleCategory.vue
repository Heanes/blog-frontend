<template>
  <div class="main">
    <div class="page-header">
      <p>正在显示分类{{articleCategory}}的文章</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HecPageArticleCategory',
  data(){
    return {
      articleCategory: '',
      articleList: []
    }
  }
}
</script>

<style scoped>

</style>
