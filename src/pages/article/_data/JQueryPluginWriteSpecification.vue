<template>
  <he-article-detail>
    <template slot="articleTitle">jQuery插件编写要则</template>
    <template slot="articleContent">
      <h2>1. 有默认配置option</h2>
      <p>有良好的默认配置option，增加插件易用性。</p>
      <p>如：</p>
      <pre class="brush:xml">
this._default = {
    field1: 'value1',
    field2: 'value2'
}
</pre>
      <h2>2. 对于传入的option一定要统一处理和转化</h2>
      <p>统一处理传入参数，可避免传参出现一些意想不到的结果。</p>
      <p>如：</p>
      <pre>
var option = {
   enableSomeFeature: 'false',
   somethingLength: '6',
   someElseLength: '2',
}
</pre>
      <p>当本需要传入一个boolean类型的参数时，传入一个字符串'false'(有可能是从页面输入得到的这种不正确的boolean值)，当判断if('false')时，结果为true。</p>
      <p>当本需要传入一个数值型的参数时，传入一个字符串'6'时，如果进行值的加法，如somethingLength  + someElseLength，此时得到的为'62'，最后要用其数值时将会得到62而不是8。</p>
      <h2>3. 有初始化状态保存机制</h2>
      <p>如：</p>
      <pre>
如：
this.isInited = true
</pre>
      <h2>4. 支持重复调用</h2>
      <p>如：</p>
      <pre>
// 先进行第一次调用
$something.somePlugin();
// 第二次调用
$something.somePlugin();
</pre>
      <h2>5. 支持销毁</h2>
      <p>调用这个插件后，如果想要销毁，则要消除插件带来的全部效果和影响，因此需要预先保留原始dom的所有内容，并还需实现一个destroy方法，在这个方法里移除插件内容和还原原始dom。</p>
      <pre class="brush:xml">
// 声明时获取dom
var somePlugin = function (element, options) {
    this.$element = $(element);
    // more code
}
// 定义一个初始化方法，保存原始dom
somePlugin.prototype.init = function(){
    this.originDom = this.$element;
    // more code
}
// 销毁插件
somePlugin.prototype.destroy = function(){
    doSomethingToDestroy;
}
</pre>
      <h2>6. 良好的事件机制</h2>
      <p>在合适的时机定义合适的事件，可以为用户提供处理插件带来影响时方便的做出附加动作的契机。</p>
      <p>如某件事情要做前，定义一个beforeDoSomething事件，这件事做完后定义一个afterDoSomething事件，并调用用户参数中传入的事件函数。并且，应为这个事件处理函数设置良好的预定义参数。</p>
      <h2>7. 支持显式刷新参数</h2>
      <p>如，定义一个'refreshOption'方法，接受新的option对象作为参数，来改变插件的行为：</p>
      <pre>
somePlugin.prototype.refresh = function(){
    doSomethingToRefresh;
}
</pre>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'JQueryPluginWriteSpecification',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
