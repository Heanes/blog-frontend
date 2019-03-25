<template>
  <he-article-detail>
    <template slot="articleTitle">MacOS锁定屏幕快捷键</template>
    <template slot="articleContent">
      <h2>缘起</h2>
      <p>日常使用或工作环境中使用电脑，若离开自己的电脑或者工位一般需要锁定电脑，个人隐私习惯也好，出于公司规定也好，这都是很正确的做法，可以很好的保护隐私及个人电脑安全。</p>
      <p>原来使用Windows系列的系统习惯了，一般都使用 <kbd><i class="fa fa-windows" aria-hidden="true"></i> + L</kbd> 组合键(L即lock的缩写)来快速锁定屏幕；
        使用MacBook之后，发现没有这个快捷键了(当时系统还是10.13之前)。
      </p>
      <h2>MacOS快捷键锁定屏幕</h2>
      <p>最近发现更新到新的版本的系统后，自带也有快捷锁定键了。</p>
      <h3>默认快捷键</h3>
      <p>默认是<kbd>⌘ + ⌃ + Q</kbd>即<kbd>⌘(command) + ⌃(control) + Q</kbd>组合键。
      </p>
      <div class="img-wrap" style="max-width:219px;">
        <img src="https://ws4.sinaimg.cn/large/006tKfTcly1fqy71g0cohj30c60g0779.jpg" class="img-2x img-show" title="lock screen shortcut default cmd + control + q" alt="lock screen shortcut default cmd + control + q">
        <p class="img-desc">默认锁屏快捷键</p>
      </div>
      <p class="tip">注意腾讯QQ软件的打开联系人的默认快捷键也是<kbd>⌘ + ⌃ + Q</kbd>，会有<strong>快捷键冲突</strong>，故需要手动修改Mac QQ的快捷键。</p>
      <h3>添加自定义快捷键</h3>
      <p>若默认快捷键的习惯不太适应的话，则可以手动添加自定义快捷键。步骤如下：</p>
      <ol class="step-order-list">
        <li>1. 打开"系统偏好设置"；</li>
        <li>2. 打开"键盘"设置；</li>
        <li>3. 选择"快捷键"选项卡；</li>
        <li>4. 点击"应用快捷"选项卡；</li>
        <li>5. 点击"+"添加自定义快捷键；</li>
        <li>6. "应用程序"选择所有应用程序，"菜单标题"输入"锁定屏幕"，"键盘快捷键"由你敲入想设置的组合快捷键；</li>
        <li>7. 退出"系统偏好设置"；</li>
      </ol>
      <h3>设置操作示意图</h3>
      <div class="img-wrap" style="max-width:668px;">
        <img src="https://ws3.sinaimg.cn/large/006tKfTcly1fqy7vqfpuij31140waq8j.jpg" class="img-2x img-show" title="keyboard setting" alt="keyboard setting">
        <p class="img-desc">打开键盘快捷键设置</p>
      </div>
      <div class="img-wrap" style="max-width:408px;">
        <img src="https://ws4.sinaimg.cn/large/006tKfTcly1fqy7wuzjygj30mo0a20u3.jpg" class="img-2x img-show" title="keyboard setting lock screen" alt="keyboard setting lock screen">
        <p class="img-desc">设置锁定屏幕快捷键</p>
      </div>
      <div class="img-wrap" style="max-width:668px;">
        <img src="https://ws2.sinaimg.cn/large/006tKfTcly1fqy7xrnhtzj31140wagr7.jpg" class="img-2x img-show" title="keyboard setting lock screen after set" alt="keyboard setting lock screen after set">
        <p class="img-desc">设置完成</p>
      </div>
      <div class="img-wrap" style="max-width:219px;">
        <img src="https://ws1.sinaimg.cn/large/006tKfTcly1fqy88bc6x2j30c40fygo9.jpg" class="img-2x img-show" title="keyboard setting lock screen after set" alt="keyboard setting lock screen after set">
        <p class="img-desc">设置好后的锁屏快捷键</p>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'MacLockScreenShortcut',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
