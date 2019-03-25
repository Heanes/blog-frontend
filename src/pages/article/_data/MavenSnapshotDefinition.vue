<template>
  <he-article-detail>
    <template slot="articleTitle">Maven快照机制定义</template>
    <template slot="articleContent">
      <h2>一、场景</h2>
      <p>一个大型的软件应用通常包含多个模块，并且通常的场景是多个团队开发同一应用的不同模块。举个例子，设想一个团队开发应用的前端，项目为 <code>app-ui（app-ui.jar:1.0）</code>，而另一个团队开发应用的后台，使用的项目是 <code>data-service（data-service.jar:1.0）</code> 。</p>
      <p>现在可能出现的情况是开发data-service的团队正在进行快节奏的bug修复或者项目改进，并且他们几乎每隔一天就要发布库到远程仓库。</p>
      <p>现在如果data-service团队每隔一天上传一个新版本，那么将会出现下面的问题：</p>
      <ul>
        <li>data-service团队每次发布更新的代码时都要告知app-ui团队。</li>
        <li>app-ui团队需要经常地更新他们pom.xml文件到最新版本。</li>
      </ul>
      <p>为了解决这种情况， 快照（SNAPSHOT）的概念派上了用场。</p>
      <h2>二、什么是快照（SNAPSHOT）？</h2>
      <p><strong>快照（SNAPSHOT）</strong>是一种特殊的版本，指定了某个当前的开发进度的副本。不同于常规的版本，Maven每次构建都会在远程仓库中检查新的快照。</p>
      <p>现在data-service团队会每次发布更新代码的快照到仓库中，比如说data-service:1.0-SNAPSHOT来替代旧的快照jar包。</p>
      <p>注意：每次更新jar包时，版本好不变，且后缀必须带上-SNAPSHOT。</p>
      <h2>三、项目快照（Snapshot） VS 版本（Version）</h2>
      <p><strong>版本（Version）</strong>的情况下，如果Maven以前下载过指定的版本文件，比如说data-service:1.0，Maven将不会再从仓库下载新的可用的1.0文件。若要下载更新的代码，data-service的版本需要升到1.1。</p>
      <p><strong>快照（Snapshot）</strong>的情况下，每次app-ui团队构建他们的项目时，Maven将自动获取最新的快照(data-service:1.0-SNAPSHOT)。</p>
      <p>备注：<strong>版本（Version）</strong>存放在Release发布仓库。<strong>快照（Snapshot）</strong>存放在Snapshot快照仓库。</p>
      <p>注意：<strong>版本（Version）</strong>的概念，只要不带有 <strong>-SNAPSHOT</strong> 的关键字时，都会认为这是一个在 <strong>Release发布仓库</strong> 的jar包。其中在<strong>Release发布仓库</strong>的jar包命名除了具体的版本号之后还可以带上比如：1.0-Release、1.0-rc1等等的字样。</p>
      <h2>四、原理详解</h2>
      <p>Maven中的仓库分为两种，<strong>Snapshot快照仓库</strong>和 <strong>Release发布仓库</strong> 。<strong>Snapshot快照仓库</strong>用于保存开发过程中的不稳定版本，<strong>Release正式仓库</strong>则是用来保存稳定的发行版本。
        定义一个组件/模块为<strong>快照版本</strong>，只需要在<strong>pom.xml</strong>文件中在该模块的版本号后加上<strong>-SNAPSHOT</strong>即可（<span class="notice-important">注意这里必须是大写</span>），如下所示：</p>
      <pre>
&lt;groupId&gt;com.jsoft.test&lt;/groupId&gt;
&lt;artifactId&gt;testcommon&lt;/artifactId&gt;
&lt;version&gt;0.1-SNAPSHOT&lt;/version&gt;
&lt;packaging&gt;jar&lt;/packaging&gt;
</pre>
      <p>Maven会根据模块的版本号（<strong>pom.xml</strong>文件中的<strong>version</strong>）中是否带有<strong>-SNAPSHOT</strong>来判断是<strong>快照版本</strong>还是<strong>正式版本</strong>。
        如果是<strong>快照版本</strong>，那么在<strong>mvn deploy</strong>时会自动发布到<strong>快照版本库</strong>中，而使用快照版本的模块，在<strong>不更改版本号</strong>的情况下，直接编译打包时，Maven会<strong>自动从镜像服务器上下载最新的快照版本</strong>。
        如果是<strong>正式发布版本</strong>，那么在<strong>mvn deploy</strong>时会自动发布到正式版本库中。而使用<strong>正式版本</strong>的模块，在<strong>不更改版本号</strong>的情况下，编译打包时如果本地已经存在该版本的模块则<strong>不会主动去镜像服务器上下载</strong>。</p>
      <p>所以，我们在开发阶段，可以将公用库的版本设置为快照版本，而被依赖组件则引用快照版本进行开发，在公用库的快照版本更新后，我们也不需要修改<strong>pom.xml</strong>文件提示版本号来下载新的版本，直接Maven执行相关编译、打包命令即可重新下载最新的快照库了，从而也方便了我们进行开发。</p>
      <p>虽然，快照的情况下，Maven在日常工作中会自动获取最新的快照，你也可以在任何Maven命令中使用<strong>-U参数</strong>强制Maven下载最新的快照构建。命令如下：</p>
      <pre>
mvn clean package <span class="notice-important">-U</span>
</pre>
      <h2>参考地址</h2>
      <ul>
        <li><a href="https://maven.apache.org/settings.html#Repositories">https://maven.apache.org/settings.html#Repositories</a></li>
        <li><a href="https://ayayui.gitbooks.io/tutorialspoint-maven/content/book/maven_snapshots.html">https://ayayui.gitbooks.io/tutorialspoint-maven/content/book/maven_snapshots.html</a></li>
      </ul>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'MavenSnapshotDefinition',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
