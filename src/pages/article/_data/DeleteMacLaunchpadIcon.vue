<template>
  <he-article-detail>
    <template slot="articleTitle">删除Mac上launchpad的顽固图标</template>
    <template slot="articleContent">
      <h2>第一步：找到com.apple.dock.launchpad文件夹：</h2>
      <p>打开一个folder，按 <kbd>command+shift+G</kbd>，在前往当中输入地址 <code>/private/var/folders</code>，
        然后在里边自己尝试找到 <code>com.apple.dock.launchpad</code>这个文件夹，
        我的路径是/private/var/folders/8v/.../0/com.apple.dock.launchpad，省略号处应该大家都不一样，所以慢慢找，
        总之最后找到名为com.apple.dock.launchpad的文件夹。
      </p>
      <p>会使用终端的可以采用终端命令行形式查找。如图，在"其他"文件夹中找到"终端"这个app。</p>
      <div class="img-wrap" style="max-width:583px;">
        <img src="https://ws2.sinaimg.cn/large/006tNbRwly1fvyi2t91h1j30we0rutnt.jpg" class="img-2x img-show" title="terminal" alt="terminal">
        <p class="img-desc">terminal</p>
      </div>
      <p>打开终端app，输入命令</p>
      <blockquote>sudo find /private/var/folders -name com.apple.dock.launchpad</blockquote>
      <div class="img-wrap" style="max-width:725px;">
        <img src="https://ws1.sinaimg.cn/large/006tNbRwly1fvyibp6jfgj314a0oswh6.jpg" class="img-2x img-show" title="terminal" alt="terminal">
        <p class="img-desc">命令行查找launchpad文件所在位置</p>
      </div>
      <p>可知笔者的在机器上位于<code>/private/var/folders/59/7g5z9z6n3gs82t8js7sj5fkc0000gn/0/com.apple.dock.launchpad</code>这个文件夹中。</p>
      <h2>第二步：找到数据库，获取其路径：</h2>
      <p>复制上一步找到的路径，使用 <code>cd /private/var/folders/59/7g5z9z6n3gs82t8js7sj5fkc0000gn/0/com.apple.dock.launchpad</code>命令进入文件夹，
        接着再使用 <code>cd db</code>命令进入数据库所在文件夹</p>
      <div class="img-wrap" style="max-width:837px;">
        <img src="https://ws2.sinaimg.cn/large/006tNbRwly1fvyij327zqj31ai0o0q81.jpg" class="img-2x img-show" title="terminal" alt="terminal">
        <p class="img-desc">进入到数据库所在文件夹</p>
      </div>
      <h2>第三步：开始对数据库进行操作</h2>
      <p>输入：</p>
      <blockquote>sqlite3 db "delete from apps where title='应用名称';" && killall Dock</blockquote>
      <p>注意要将"应用名称"处替换成你要删除的图标的名称，然后回车即可。</p>
      <div class="notice">
        <p>有命令行操作经验的可以一个命令执行上述的全部步骤：</p>
        <pre>
sqlite3 $(sudo find /private/var/folders -name com.apple.dock.launchpad)/db/db "DELETE FROM apps WHERE title=‘应用的名字’;” && killall Dock
</pre>
      </div>
      <div class="article-refer" style="display:none;">
        https://blog.csdn.net/qq_36004521/article/details/80740491
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'DeleteMacLaunchpadIcon',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
