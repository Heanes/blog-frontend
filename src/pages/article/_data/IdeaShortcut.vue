<template>
  <he-article-detail>
    <template slot="articleTitle">Idea常用快捷键总结记录</template>
    <template slot="articleContent">
      <h2>代码区</h2>
      <h3>代码搜索</h3>
      <p>
        <kbd>CMD</kbd> + <kbd>F12</kbd>: 大纲形式展示方法，按顺序按级别。
      </p>
      <h3>代码折叠</h3>
      <p>
        <kbd>CMD</kbd> + <kbd>Shift</kbd> + <kbd>-</kbd>: 折叠全部(递归折叠全部)
      </p>
      <p>
        <kbd>CMD</kbd> + <kbd>-</kbd>: 折叠当前区块(到第一级)
      </p>
      <p>
        <kbd>CMD</kbd> + <kbd>option</kbd> + <kbd>-</kbd>: 折叠当前区块(递归折叠当前区块)
      </p>
      <p>
        <kbd>CMD</kbd> + <kbd>.</kbd>: 对选中的代码自定义折叠，再次按键则展开
      </p>
      <h3>代码展开</h3>
      <p>
        <kbd>CMD</kbd> + <kbd>Shift</kbd> + <kbd>+</kbd>: 展开全部
      </p>
      <p>
        <kbd>CMD</kbd> + <kbd>-</kbd>: 展开当前区块(到第一级)
      </p>
      <p>
        <kbd>CMD</kbd> + <kbd>option</kbd> + <kbd>+</kbd>: 展开当前区块(递归展开当前区块)
      </p>
      <h3>代码选择</h3>
      <p>
        <kbd>⌃G</kbd> 选择下一个相同的字符串
      </p>
      <h3>代码编辑</h3>
      <p>
        <kbd>option</kbd>+<kbd>command</kbd>+<kbd>T</kbd>: surround with, 用代码包裹选中的代码，如if try-catch等
      </p>
      <p>
        输入psvm，可以快速创建一个java的main方法
      </p>
      <p>使用一个java方法后，输入.val并enter,可快速得到返回值接收语句</p>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'IdeaShortcut',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
