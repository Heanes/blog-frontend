<template>
  <div class="main" slot="main">
    <div class="page-breadcrumb main-width">
      <he-breadcrumb :breadcrumb-list="breadcrumbList"></he-breadcrumb>
    </div>
    <div class="article-archive-wrap main-width">
      <h3 class="page-title">文章索引</h3>
      <ol class="article-archive-list">
        <li class="list-item date-group date-2018-01">
          <router-link class="article-link" to="/dbDict-usage.html">MySqlDbDict-MySql数据字典工具使用说明</router-link>
          <span class="article-create-time">2018-01-15 16:57:50 周一</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/dbDict-design.html">dbDict设计说明</router-link>
          <span class="article-create-time">2018-01-15 16:57:50 周一</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/jetbrains-plugin-recommended.html">Jetbrains系列IDE(idea,webStorm,phpStorm,pyCharm,dataGrip,AppCode等)推荐插件及介绍</router-link>
          <span class="article-create-time">2018-01-17 19:30:25 周三</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/adobe-suite-download.html">Adobe系列软件下载</router-link>
          <span class="article-create-time">2018-01-30 14:56:42 周二</span>
        </li>
        <li class="list-item date-group date-2018-03">
          <router-link class="article-link" to="/jQuery-plugin-write-specification.html">jQuery插件编写要则</router-link>
          <span class="article-create-time">2018-03-26 19:04:25 周一</span>
        </li>
        <li class="list-item date-group date-2018-04">
          <router-link class="article-link" to="/transform-and-transition-and-animation.html">多步动画和过渡</router-link>
          <span class="article-create-time">2018-04-16 15:58:21 周一</span>
        </li>
        <li class="list-item date-group date-2018-05">
          <router-link class="article-link" to="/mac-lock-screen-shortcut.html">MacOS锁定屏幕快捷键</router-link>
          <span class="article-create-time">2018-05-03 16:26:02 周四</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/css-writing-convention.html">CSS编写规范</router-link>
          <span class="article-create-time">2018-05-19 18:38:25 周六</span>
        </li>
        <li class="list-item date-group date-2018-06">
          <router-link class="article-link" to="/css-name-convention-bem.html">CSS命名规范-BEM</router-link>
          <span class="article-create-time">2018-06-04 18:42:20 周一</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/jQuery-plugin-write-detail.html">jQuery插件编写详解</router-link>
          <span class="article-create-time">2018-06-25 14:43:25 周一</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/js-study-mind-map.html">js学习思维导图</router-link>
          <span class="article-create-time">2018-06-27 14:41:41 周三</span>
        </li>
        <li class="list-item date-group date-2018-07">
          <router-link class="article-link" to="/mac-terminal-shortcut-list.html">Mac终端快捷键及命令缩写释义</router-link>
          <span class="article-create-time">2018-07-25 10:12:53 周三</span>
        </li>
        <li class="list-item date-group date-2018-09">
          <router-link class="article-link" to="/specific-sql-write-technique.html">SQL一些特殊需求的编写技巧</router-link>
          <span class="article-create-time">2018-09-06 19:31:43 周四</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/delete-mac-launchpad-icon.html">删除Mac上launchpad的顽固图标</router-link>
          <span class="article-create-time">2018-09-29 17:33:09 周六</span>
        </li>
        <li class="list-item date-group date-2018-10">
          <router-link class="article-link" to="/config-php-error-log.html">php及php-fpm输出错误日志</router-link>
          <span class="article-create-time">2018-10-24 11:44:29 周三</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/website-ssl-certificate.html">网站申请免费SSL证书</router-link>
          <span class="article-create-time">2018-10-26 14:35:48 周五</span>
        </li>
        <li class="list-item date-group date-2018-11">
          <router-link class="article-link" to="/maven-download-snapshot-problem-solve.html">Maven设置snapshot无法在远程仓库下载的问题解决</router-link>
          <span class="article-create-time">2018-11-05 14:04:08 周一</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/maven-snapshot-definition.html">Maven快照机制定义</router-link>
          <span class="article-create-time">2018-11-05 15:11:49 周一</span>
        </li>
        <li class="list-item date-group date-2019-01">
          <router-link class="article-link" to="/idea-common-shortcut.html">Idea常用快捷键总结记录</router-link>
          <span class="article-create-time">2019-01-06 15:44:11 周日</span>
        </li>
        <li class="list-item">
          <router-link class="article-link" to="/nginx-configuration-manual.html">nginx自主手动编译安装</router-link>
          <span class="article-create-time">2019-01-25 12:10:13 周五</span>
        </li>
        <li class="list-item date-group date-2019-02">
          <router-link class="article-link" to="/js-type-judgment-and-duck-type.html">js类型判断及鸭式辨型</router-link>
          <span class="article-create-time">2019-02-22 16:06:49 周五</span>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import HeBreadcrumb from '@/components/common/Breadcrumb';

export default {
  name: 'ArticleArchiveList',
  components: {
    'he-breadcrumb': HeBreadcrumb
  },
  data () {
    return {
      pageTitle: '文章索引',
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章索引',
          link: 'archive.html'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
