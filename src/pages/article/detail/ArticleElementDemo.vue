<template>
  <he-article-detail>
    <template slot="articleTitle">文章元素示例</template>
    <template slot="articleContent">
      <ol>
        <li>header 标题</li>
        <li>paragraph 段落</li>
        <li>image 图片</li>
        <li>gallery 图片画廊</li>
        <li>table 表格</li>
        <li>list 列表</li>
        <li>blockquote 引用</li>
        <li>code 代码高亮</li>
        <li>tips 提示</li>
        <li>collapse 折叠展示内容</li>
      </ol>

      <h2>第一级标题</h2>
      <p>第一级标题</p>

      <h3>第二级标题</h3>
      <p>第二级标题</p>

      <h2>普通段落</h2>
      <p>这是一段普通段落文字，这是一段普通段落文字，这是一段普通段落文字。</p>
      <p>普通段落文字里可以包含<strong>粗体文本</strong>，还可以包含<em>斜体文本</em>，以及<strong><em>加粗的斜体文本</em></strong></p>

      <h2>图片</h2>
      <p>图片包含图片展示和<strong>图片注解</strong>。鼠标浮上时图片有不同效果。</p>
      <div class="img-wrap" style="max-width:200px;">
        <img src="/public/upload/image/common/logo/logo.svg" class="img-2x img-show" title="picture example" alt="picture example">
        <p class="img-desc">图片</p>
      </div>

      <h2>引用</h2>
      <blockquote>生存还是毁灭，这是一个问题</blockquote>

      <h2>提示信息</h2>
      <h3>提示/成功</h3>
      <div class="notice success">
        <p>Please notice this, Please notice this, Please notice this, Please notice this.</p>
      </div>
      <h3>提示/警告</h3>
      <div class="notice warning">
        <p>Please notice this, Please notice this, Please notice this, Please notice this.</p>
      </div>
      <h3>提示/错误</h3>
      <div class="notice danger">
        <p>Please notice this, Please notice this, Please notice this, Please notice this.</p>
      </div>

      <h2>折叠</h2>
      <details class="details">
        <summary class="summary">点击展开查看更多信息。</summary>
        <p>html的details原生标签支持折叠展开功能。</p>
      </details>

      <h2>代码</h2>
      <pre>
console.log('Hello world');
// 空行
echo 'Hello world';
/* 空行 */
System.println("Hello world");
</pre>
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
