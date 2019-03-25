<template>
  <he-article-detail>
    <template slot="articleTitle">Maven设置snapshot无法在远程仓库下载的问题解决</template>
    <template slot="articleContent">
      <h2>缘起</h2>
      <p>Java项目中，依赖的项目的版本可能会出现"1.0-snapshot"这种形式的版本，若没配置snapshot支持，则会出现无法下载远程仓库中的snapshot版本jar包的问题。</p>
      <div class="reference">
        <p>maven的snapshot快照机制定义见 <a href="maven-download-snapshot-problem-solve.html">maven快照机制</a> </p>
      </div>
      <h2>解决</h2>
      <p>配置中是否启用snapshots功能。以下方法两种设置都可以，任选一个即可。</p>
      <h3>项目pom.xml</h3>
      <pre>
&lt;repositories&gt;
    &lt;repository&gt;
        &lt;id&gt;test-nexus&lt;/id&gt;
        &lt;name&gt;test&lt;/name&gt;
        &lt;url&gt;http://192.168.1.253/nexus/content/groups/public/&lt;/url&gt;
        &lt;snapshots&gt;
            &lt;enabled&gt;true&lt;/enabled&gt;
        &lt;/snapshots&gt;
    &lt;/repository&gt;
&lt;/repositories&gt;
</pre>
      <h3>maven的settings.xml</h3>
      <pre>
&lt;profiles&gt;
    &lt;profile&gt;
        &lt;id&gt;nexus&lt;/id&gt;
        &lt;repositories&gt;
            &lt;repository&gt;
                &lt;id&gt;central&lt;/id&gt;
                &lt;name&gt;Nexus&lt;/name&gt;
                &lt;url&gt;http://192.168.1.253/nexus/content/groups/public/&lt;/url&gt;
                &lt;releases&gt;
                    &lt;enabled&gt;true&lt;/enabled&gt;
                &lt;/releases&gt;
                &lt;snapshots&gt;
                    &lt;enabled&gt;true&lt;/enabled&gt;
                &lt;/snapshots&gt;
            &lt;/repository&gt;
        &lt;/repositories&gt;
        &lt;pluginRepositories&gt;
            &lt;pluginRepository&gt;
                &lt;id&gt;central&lt;/id&gt;
                &lt;name&gt;Nexus&lt;/name&gt;
                &lt;url&gt;http://192.168.1.253/nexus/content/groups/public/&lt;/url&gt;
                &lt;releases&gt;
                    &lt;enabled&gt;true&lt;/enabled&gt;
                &lt;/releases&gt;
                &lt;snapshots&gt;
                    &lt;enabled&gt;true&lt;/enabled&gt;
                &lt;/snapshots&gt;
            &lt;/pluginRepository&gt;
        &lt;/pluginRepositories&gt;
    &lt;/profile&gt;
&lt;/profiles&gt;
&lt;activeProfiles&gt;
    &lt;activeProfile&gt;nexus&lt;/activeProfile&gt;
&lt;/activeProfiles&gt;
</pre>
      <p>activeProfile一定要加，不然配置不生效。结构很简单，以profile的形式引入，pluginRepository节点可以不用引入，但是snapshots enabled必须设置为true。</p>
      <p>可以查看配置是否生效：</p>
      <pre>
mvn help:effective-pom
或者
mvn compile -U
</pre>
      <h2>参考地址</h2>
      <ul>
        <li><a href="http://maven.apache.org/settings.html">http://maven.apache.org/settings.html</a></li>
      </ul>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'MavenDownloadSnapshotProblemSolve',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
