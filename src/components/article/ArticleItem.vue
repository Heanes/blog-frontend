<template>
  <div class="article-item">
    <div class="article-title">
      <h1 class="title"><a class="link title-link" :href="semanticLink !== '' ? '/article/detail/'+ semanticLink + '.html' : false">{{title}}</a></h1>
    </div>
    <div class="article-info">
      <div class="article-attribute-info">
        <dl class="info-item">
          <dt class="item-name">作者:</dt>
          <dd class="item-value"><a class="link item-link" :href="(author && author.link) ? author.link : false">{{author.name || 'author'}}</a></dd>
        </dl>
        <dl class="info-item">
          <dt class="item-name">日期:</dt>
          <dd class="item-value">{{publishTimeFormative}}</dd>
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
          <dd class="item-value" v-for="(category, index) in categories" :key="index">
            <i class="category-separator" v-show="index > 0">/</i>
            <a class="link item-link" :href="category.link">{{category.name}}</a>
          </dd>
        </dl>
        <dl class="info-item article-tags">
          <dt class="item-name"><i class="fa fa-tags label-icon" aria-hidden="true"></i><span>标签:</span></dt>
          <dd class="item-value" v-for="(tag, index) in tags" :key="index">
            <a class="link item-link" :href="tag.link">{{tag.name}}</a>
          </dd>
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
    semanticLink: {
      type: [String, Number],
      default: ''
    },
    // 作者
    author: {
      type: Object,
      default: function () {
        return {};
      }
    },
    // 分类
    categories: {
      type: Array,
      default: function () {
        return [];
      }
    },
    // 标签
    tags: {
      type: Array,
      default: function () {
        return [];
      }
    },
    // 日期
    publishTimeFormative: {
      type: String,
      default: ''
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
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
