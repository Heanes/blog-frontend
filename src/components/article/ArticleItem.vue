<template>
  <div class="article-item">
    <div class="article-title">
      <h1 class="title"><a class="link title-link" :href="link">{{title}}</a></h1>
    </div>
    <div class="article-info">
      <div class="article-attribute-info">
        <dl class="info-item">
          <dt class="item-name">作者:</dt>
          <dd class="item-value"><a class="link item-link" :href="author.link">{{author.name || 'author'}}</a></dd>
        </dl>
        <dl class="info-item">
          <dt class="item-name">日期:</dt>
          <dd class="item-value">{{publishDateTimeFormative}}2016-02-22 12:20:15</dd>
        </dl>
        <dl class="info-item">
          <dt class="item-name">点击:</dt>
          <dd class="item-value">{{clickCount}}</dd>
        </dl>
        <dl class="info-item">
          <dt class="item-name">评论:</dt>
          <dd class="item-value">{{commentCount}}</dd>
        </dl>
      </div>
      <div class="article-category-info">
        <dl class="info-item article-category">
          <dt class="item-name"><i class="fa fa-tasks label-icon" aria-hidden="true"></i><span>分类:</span></dt>
          <dd class="item-value"><a class="link item-link" href="javascript:">前端</a></dd>
        </dl>
        <dl class="info-item article-tags">
          <dt class="item-name"><i class="fa fa-tags label-icon" aria-hidden="true"></i><span>标签:</span></dt>
          <dd class="item-value"><a class="link item-link" href="javascript:">前端</a></dd>
          <dd class="item-value"><a class="link item-link" href="javascript:">CSS</a></dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    // 标题
    title: {
      type: String,
      require: true,
      default: 'Article title'
    },
    // 链接
    link: {
      type: String
    },
    // 作者
    author: {
      type: Object
    },
    // 日期
    publishDateTimeFormative: {
      type: String
    },
    // 点击数
    clickCount: {
      type: Number,
      default: 0
    },
    // 点击数
    commentCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>

</style>
