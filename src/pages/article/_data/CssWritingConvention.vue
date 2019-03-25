<template>
  <he-article-detail>
    <template slot="articleTitle">CSS编写规范</template>
    <template slot="articleContent">
      <h2>文件规范</h2>
      <h3>文件均归档至约定的目录中</h3>
      <p>一般CSS分为两大类：通用类和业务类。</p>
      <p>通用的CSS文件，可放在如下目录中：</p>
      <pre class="brush:html">
static/css/common   共同部分
static/css/style    网站风格样式
</pre>
      <p>业务类的CSS文件，可放在如下目录中：</p>
      <pre class="brush:html">
static/css/article      文章
static/css/project      项目
static/css/book         书籍
static/css/movie        电影
static/css/music        音乐
... 等等
</pre>
      <h3>文件引入可通过外联或内联方式引入</h3>
      <p>link和style标签都应该放入head中，原则上，不允许在html上直接写样式。避免在CSS中使用@import，嵌套不要超过一层。</p>
      <p><strong>注：随着时代发展，不建议写内联样式。</strong></p>
      <div class="explain">
        <p>外联是指在<code>head</code>中通过<code>link</code>的形式引入</p>
        <pre class="brush:html">
&lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;//ui.heanes.com/dist/css/heanesUI.css&quot;/&gt;
</pre>
        <p>内联是指在页面中(一般是<code>head</code>中)通过<code>style</code>标签里直接书写css样式</p>
        <pre class="brush: css">
&lt;style type=&quot;text/css&quot;&gt;
    .demo-style{
      display:block;
      background-color:#eee;
    }
&lt;/style&gt;
</pre>
      </div>
      <h3>组件化形式组织好css文件</h3>
      <p>组件化是指将网页上的各类元素总结归类，这样可以提高复用性，也好统一风格。</p>
      <p>例如：</p>
      <pre class="brush:html">
static/css/button       按钮
static/css/icon         图标
static/css/text         文本
static/css/input        表单输入
static/css/select       表单下拉项
static/css/table        表格
static/css/pagination   分页
... 等等
</pre>
      <h2>注释规范</h2>
      <p>良好的注释可以帮助你在庞杂的css样式中找到需要修改的文件的大体位置。</p>
      <h3>1、文件顶部注释（推荐使用）</h3>
      <p>这部分主要是对整个文件做大体说明。</p>
      <pre class="brush:css">
/**
 * @doc 中/英文说明
 * @author Heanes
 * @time 2018-05-25 14:55:38 周五
 */
</pre>
      <h3>2、模块注释</h3>
      <pre class="brush:css">
/* module: module1 by Heaness */
…
/* module: module2 by 张三 */
</pre>
      <p>为方便区分和定位，还可以添加一定数量的分隔符，是模块的界限更明显：</p>
      <pre class="brush:css">
/* -------------------- module: module1 by Heanes -------------------- */
…
/* -------------------- module: module1 by 张三 -------------------- */
</pre>
      <h3>3、 单行注释与多行注释</h3>
      <p>单行注释可以写在单独一行，也可以写在行尾，注释中的每一行长度不超过40个汉字，或者80个英文字符。</p>
      <pre class="brush:css">
/* this is a short comment */
</pre>
      <pre class="brush:css">
/**
 * this is comment line 1.
 * this is comment line 2.
 */
</pre>
      <h3>4、特殊注释</h3>
      <pre class="brush:css">
/* 用于标注修改、待办等信息 */
/* TODO: something by userName 2018-05-25 14:55:38 周五 */
/* BUGFIX: something by userName 2018-05-25 14:55:38 周五 */
</pre>
      <h3>5、区块注释</h3>
      <pre class="brush:css">
/* Header */
/* Footer */
/* Gallery */
</pre>
      <p>对一个代码区块注释（可选），将样式语句分区块并在新行中对其注释。</p>
      <h2>命名规范</h2>
      <h3>1. 使用有意义的或通用的class命名</h3>
      <p>
        命名应反映该元素的功能或使用通用名称，而不要用抽象的晦涩的命名。
        反映元素的使用目的是首选；使用通用名称代表该元素不表特定意义，与其同级元素无异，通常是用于辅助命名；
        使用功能性或通用的名称可以更适用于文档或模版变化的情况。
      </p>
      <h3>2. 不建议使用ID选择器</h3>
      <p>ID一般是唯一标识，通用性不强，也就意味着重用性低。</p>
      <h3>3. 不建议使用太多的纯标签选择器</h3>
      <pre class="brush:css;">
form{
    margin:0;
    padding:0
}
</pre>
      <h3>4. 命名时需要注意的点：</h3>
      <ol class="step-order-list">
        <li>规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或 _</li>
        <li>命名避免使用中文拼音，应该采用更简明有语义的英文单词进行组合</li>
        <li>命名注意缩写，但是不能盲目缩写，具体请参见常用的CSS命名规则</li>
        <li>不允许通过1、2、3等序号进行命名</li>
        <li>避免class与id重名</li>
        <li>id用于标识模块或页面的某一个父容器区域，名称必须唯一，不要随意新建id</li>
        <li>class用于标识某一个类型的对象，命名必须言简意赅。</li>
        <li>尽可能提高代码模块的复用，样式尽量用组合的方式</li>
        <li>规则名称中不应该包含颜色（red/blue）、定位（left/right）等与具体显示效果相关的信息。应该用意义命名，而不是样式显示结果命名。</li>
      </ol>
      <h3>5. 常用命名</h3>
      <h4>(1). 页面结构</h4>
      <div style="margin-left:2em">
        <ul>
          <li>容器: container</li>
          <li>页头：header</li>
          <li>内容：content/container</li>
          <li>页面主体：main</li>
          <li>页尾：footer</li>
          <li>导航：nav</li>
          <li>侧栏：sidebar</li>
          <li>栏目：column</li>
          <li>页面外围控制整体布局宽度：wrapper</li>
          <li>左右中：left right center</li>
        </ul>
      </div>
      <h4>(2). 导航</h4>
      <div style="margin-left:2em">
        <ul>
          <li>导航：nav</li>
          <li>主导航：mainbav</li>
          <li>子导航：subnav</li>
          <li>顶导航：topnav</li>
          <li>边导航：sidebar</li>
          <li>左导航：leftsidebar</li>
          <li>右导航：rightsidebar</li>
          <li>菜单：menu</li>
          <li>子菜单：submenu</li>
          <li>标题: title</li>
          <li>摘要: summary</li>
        </ul>
      </div>
      <h4>(3). 功能</h4>
      <div style="margin-left:2em">
        <ul>
          <li>标志：logo</li>
          <li>广告：banner</li>
          <li>登陆：login</li>
          <li>登录条：loginbar</li>
          <li>注册：regisiter</li>
          <li>搜索：search</li>
          <li>功能区：shop</li>
          <li>标题：title</li>
          <li>加入：joinus</li>
          <li>状态：status</li>
          <li>按钮：btn</li>
          <li>滚动：scroll</li>
          <li>标签页：tab</li>
          <li>文章列表：list</li>
          <li>提示信息：msg</li>
          <li>当前的: current</li>
          <li>小技巧：tips</li>
          <li>图标: icon</li>
          <li>注释：note</li>
          <li>指南：guild</li>
          <li>服务：service</li>
          <li>热点：hot</li>
          <li>新闻：news</li>
          <li>下载：download</li>
          <li>投票：vote</li>
          <li>合作伙伴：partner</li>
          <li>友情链接：link</li>
          <li>版权：copyright</li>
        </ul>
      </div>
      <h2>书写规范</h2>
      <h3>1、排版规范</h3>
      <p>(1)使用4个空格，而不使用tab或者混用空格+tab作为缩进；</p>
      <p>(2)规则可以写成单行，或者多行，但是整个文件内的规则排版必须统一；</p>
      <p>每一个属性值后必须添加分号; </p>
      <p>多个selector共用一个样式集，则多个selector必须写成多行形式 ；</p>
      <h3>2、属性编写顺序</h3>
      <ol class="step-order-list">
        <li>显示属性：display/list-style/position/float/clear …</li>
        <li>自身属性（盒模型）：width/height/margin/padding/border</li>
        <li>背景：background</li>
        <li>行高：line-height</li>
        <li>文本属性：color/font/text-decoration/text-align/text-indent/vertical-align/white-space/content…</li>
        <li>其他：cursor/z-index/zoom/overflow</li>
        <li>CSS3属性：transform/transition/animation/box-shadow/border-radius</li>
        <li>如果使用CSS3的属性，如果有必要加入浏览器前缀，则按照 -webkit- / -moz- / -ms- / -o- / std的顺序进行添加，标准属性写在最后。</li>
        <li>链接的样式请严格按照如下顺序添加： a:link -&gt; a:visited -&gt; a:hover -&gt; a:active</li>
      </ol>
      <h3>3、规则书写规范</h3>
      <div style="margin-left:2em">
        <ul>
          <li>使用单引号，不允许使用双引号;</li>
          <li>每个声明结束都应该带一个分号，不管是不是最后一个声明;</li>
          <li>除字体设置外，CSS文件中的所有的代码都应该小写;</li>
          <li>除了重置浏览器默认样式外，禁止直接为html tag添加css样式设置;</li>
          <li>每一条规则应该确保选择器唯一，禁止直接为全局.nav/.header/.body等类设置属性;</li>
        </ul>
      </div>
      <h3>4、代码性能优化</h3>
      <div style="margin-left:2em">
        <ul>
          <li>合并margin、padding、border的-left/-top/-right/-bottom的设置，尽量使用短名称。</li>
          <li>选择器应该在满足功能的基础上尽量简短，减少选择器嵌套，查询消耗。但是一定要避免覆盖全局样式设置。</li>
          <li>注意选择器的性能，不要使用低性能的选择器。</li>
          <li>禁止在css中使用*选择符。</li>
          <li>除非必须，否则，一般有class或id的，不需要再写上元素对应的tag。</li>
          <li>0后面不需要单位，比如0px可以省略成0，0.8px可以省略成.8px。</li>
          <li>如果可以，颜色尽量用三位字符表示，例如<code>#dddddd</code>写成<code>#ddd</code> 。</li>
          <li>如果没有边框时，不要写成border:0，应该写成border:none 。</li>
          <li>尽量避免使用AlphaImageLoader 。</li>
          <li>在保持代码解耦的前提下，尽量合并重复的样式。</li>
          <li>background、font等可以缩写的属性，尽量使用缩写形式 。</li>
        </ul>
      </div>
      <h3>5、字体规则</h3>
      <div style="margin-left:2em">
        <ul>
          <li>为了防止文件合并及编码转换时造成问题，建议将样式中文字体名字改成对应的英文名字，如：黑体(SimHei) 宋体(SimSun) 微软雅黑 (Microsoft Yahei，几个单词中间有空格组成的必须加引号)</li>
          <li>字体粗细采用具体数值，粗体bold写为700，正常normal写为400</li>
          <li>font-size必须以px或pt为单位，推荐用px（注：pt为打印版字体大小设置），不允许使用xx-small/x-small/small/medium/large/x-large/xx-large等值</li>
          <li>为了对font-family取值进行统一，更好的支持各个操作系统上各个浏览器的兼容性，font-family不允许在业务代码中随意设置</li>
        </ul>
      </div>
      <h2>测试规范</h2>
      <h3>1、了解浏览器特效支持</h3>
      <h3>2、设定浏览器支持标准</h3>
      <h3>3、常用样式测试工具</h3>
      <div style="margin-left:2em">
        <ul>
          <li>W3C CSS validator：<a href="http://jigsaw.w3.org/css-validator/">http://jigsaw.w3.org/css-validator/</a></li>
          <li>CSS Lint：<a href="http://csslint.net/">http://csslint.net/</a></li>
          <li>CSS Usage：<a href="https://addons.mozilla.org/en-us/firefox/addon/css-usage/">https://addons.mozilla.org/en-us/firefox/addon/css-usage/</a></li>
        </ul>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'CssWritingConvention',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
