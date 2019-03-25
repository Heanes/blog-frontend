<template>
  <he-article-detail>
    <template slot="articleTitle">MySqlDbDict-MySql数据字典工具使用说明</template>
    <template slot="articleContent">
      <h2>数据字典整体流程图</h2>
      <div class="img-wrap" style="max-width:1263px;">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fonaylvmblj31kw12nmyj.jpg" class="img-2x img-show" title="Design process picture" alt="Design process picture">
        <p class="img-desc">设计流程图</p>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'ArticleElementDemo',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
