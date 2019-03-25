<template>
  <div class="article-title-wrap">
    <!-- 文章标题 -->
    <div class="article-title">
      <h1 class="entry-title">
        <slot name="articleTitle"></slot>
      </h1>
    </div>
    <!-- 文章相关属性信息 -->
    <div class="article-info">
      <dl class="article-info-dl">
        <dt>点击:</dt>
        <dd>987</dd>
        <dt><a href="#comment-list" class="comment-count">评论:</a></dt>
        <dd><a href="#comment-list" class="comment-count">2</a></dd>
        <dt>作者:</dt>
        <dd>Heanes</dd>
        <dt>责编:</dt>
        <dd>Heanes</dd>
        <dt>时间:</dt>
        <dd>2015-05-19 09:46:35</dd>
        <dt>来源:</dt>
        <dd>原创</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleDetailTitle'
}
</script>

<style scoped>

</style>
