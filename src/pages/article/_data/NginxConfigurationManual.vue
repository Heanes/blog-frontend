<template>
  <he-article-detail>
    <template slot="articleTitle">nginx自主手动编译安装</template>
    <template slot="articleContent">
      <p>本文主要讲在Linux/unix系统上<strong>通过nginx源码自主编译安装nginx</strong>。</p>
      <h2>主要的几种安装方式</h2>
      <h3>windows</h3>
      <p>windows上是最简单的，直接启动nginx.exe即可。</p>
      <h3>linux</h3>
      <p>linux上，Ubuntu可以通过 <code>apt-get install nginx</code>方式，centOS上可以通过 <code>sudo yum install -y nginx</code>进行安装</p>
      <p>但上述所讲的安装都是别人预设好的，这里记录一下自主编译安装nginx的方式。</p>
      <h2>编译安装</h2>
      <p>nginx采用常规的先 <code>configure</code>后 <code>make</code> 再 <code>make install</code>方式，关于这种编译安装的只是</p>
      <h3>configure</h3>
      <h3>make</h3>
      <h3>make install</h3>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'NginxConfigurationManual',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
