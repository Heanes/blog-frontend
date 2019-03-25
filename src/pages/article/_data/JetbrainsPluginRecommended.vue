<template>
  <he-article-detail>
    <template slot="articleTitle">Jetbrains系列IDE(Idea,WebStorm,PhpStorm,PyCharm等)推荐插件及介绍</template>
    <template slot="articleContent">
      <h2>插件列表汇总</h2>
      <p>以下是介绍的一些插件信息概览，更多详细介绍在后面。</p>
      <table class="table table-bordered table-hover table-striped" id="pluginIntroTable">
        <thead>
        <tr style="background-color:#eee">
          <td>插件名称</td>
          <td>插件介绍</td>
          <td>插件地址</td>
          <td>实用性</td>
          <td>有趣性</td>
          <td>收费</td>
          <td>语言</td>
          <td>备注</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Key promoter</td>
          <td>快捷键提示，重复使用鼠标完成某项功能超过多次时会提示你去使用已存在的快捷键或自定义快捷键</td>
          <td><a href="https://plugins.jetbrains.com/plugin/4455-key-promoter" target="_blank">https://plugins.jetbrains.com/plugin/4455-key-promoter</a></td>
          <td>★★★★★</td>
          <td>☆</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>Grep Console</td>
          <td>自定义设置控制台输出颜色，debug,info,warn,error等等级别</td>
          <td><a href="https://plugins.jetbrains.com/plugin/7125-grep-console" target="_blank">https://plugins.jetbrains.com/plugin/7125-grep-console</a></td>
          <td>★★★</td>
          <td>★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td>若不关注console控制台输出则没必要安装</td>
        </tr>
        <tr>
          <td>CodeGlance</td>
          <td>在编辑代码最右侧，实时显示一块代码缩略图(类似Sublime text)</td>
          <td><a href="https://plugins.jetbrains.com/plugin/7275-codeglance" target="_blank">https://plugins.jetbrains.com/plugin/7275-codeglance</a></td>
          <td>★★★★</td>
          <td>★★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>Translation</td>
          <td>翻译插件</td>
          <td><a href="https://github.com/YiiGuxing/TranslationPlugin" target="_blank">https://github.com/YiiGuxing/TranslationPlugin</a></td>
          <td>★★★★</td>
          <td>★★★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/chinese.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>String Manipulation</td>
          <td>驼峰式命名和下划线命名等转换，配合自定义快捷键更佳</td>
          <td><a href="https://plugins.jetbrains.com/plugin/2162-string-manipulation" target="_blank">https://plugins.jetbrains.com/plugin/2162-string-manipulation</a></td>
          <td>★★★★</td>
          <td>★★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>GsonFormat</td>
          <td>把 JSON 字符串直接实例化成类</td>
          <td><a href="https://plugins.jetbrains.com/plugin/7654-gsonformat" target="_blank">https://plugins.jetbrains.com/plugin/7654-gsonformat</a></td>
          <td>★★★★</td>
          <td>★★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>Background Image Plus</td>
          <td>背景图片，支持透明度调节，随机定时更换(指定图片文件夹路径)</td>
          <td><a href="https://plugins.jetbrains.com/plugin/8502-background-image-plus" target="_blank">https://plugins.jetbrains.com/plugin/8502-background-image-plus</a></td>
          <td>★</td>
          <td>★★★★</td>
          <td><span style="color:#080">免费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td></td>
        </tr>
        <tr>
          <td>Mybatis plugin</td>
          <td>Dao层接口与sql文件之间快捷定位的工具</td>
          <td><a href="https://plugins.jetbrains.com/plugin/7293-mybatis-plugin" target="_blank">https://plugins.jetbrains.com/plugin/7293-mybatis-plugin</a></td>
          <td>★★★★</td>
          <td>★</td>
          <td><span style="color:#f00">收费</span></td>
          <td><img src="/public/upload/image/icons/english.svg"></td>
          <td>适用于java开发并使用到<code>myBatis</code>框架时</td>
        </tr>
        </tbody>
      </table>

      <h2>Key promoter</h2>
      <h3>插件功能</h3>
      <p>此插件的主要功能是快捷键提示，重复使用鼠标完成某项功能超过多次时会提示你去使用已存在的快捷键或自定义快捷键</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:463px;">
        <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fnkk8vxpgtj30pq12aaqs.jpg" class="img-2x img-show" title="Key promoter screenshot" alt="Key promoter screenshot">
        <p class="img-desc">在侧边会出现一个工具栏</p>
      </div>
      <p>这里记录了用鼠标进行某项操作的次数，如果是已经可以用快捷键的操作，插件就会提示是否使用快捷键；如果是没有建立快捷键操作的，当超过一定次数后，插件就会提示是否建立快捷键操作</p>
      <div class="img-wrap" style="max-width:370px;">
        <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fnkkowruqqj30kk03ywf0.jpg" class="img-2x img-show" title="Key promoter screenshot" alt="Key promoter screenshot">
        <p class="img-desc">快捷键提示</p>
      </div>
      <div class="img-wrap" style="max-width:376px;">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fnkor1uotaj30kw04udgw.jpg" class="img-2x img-show" title="Key promoter screenshot" alt="Key promoter screenshot">
        <p class="img-desc">提示建立快捷键</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后其实就可以直接使用啦，遇到提示按提示操作即可。</p>

      <h2>Grep Console</h2>
      <h3>插件功能</h3>
      <p>自定义设置控制台输出颜色，debug,info,warn,error等等级别，这样可以减少干扰，只看那些对开发者有用的重要信息。</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:1024px;">
        <img src="https://ws2.sinaimg.cn/large/006tNc79ly1fnkp0r7kxzj31kw0jwgxq.jpg" class="img-2x img-show" title="Grep Console screenshot" alt="Grep Console screenshot">
        <p class="img-desc">当console栏输出时将会有颜色区分</p>
      </div>
      <p>可以自定义配置关键字过滤，按过滤内容显示不同颜色。默认有<code>default</code>、<code>error</code>、<code>warn</code>、<code>warn</code>、<code>debug</code>、<code>trace</code>关键字配置</p>
      <div class="img-wrap" style="max-width:1300px;">
        <img src="https://ws2.sinaimg.cn/large/006tNc79ly1fnkp3dj06sj31kw0ti450.jpg" class="img-2x img-show" title="Grep Console screenshot" alt="Grep Console screenshot">
        <p class="img-desc">自定义配置</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，当你的开发过程中有需要查看IDE的console内容时，就可以看到不同啦。</p>

      <h2>CodeGlance</h2>
      <h3>插件功能</h3>
      <p>在编辑代码最右侧，实时显示一块代码缩略图(类似Sublime text)</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:907px;">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fnktq0lxguj318m1la4kx.jpg" class="img-2x img-show" title="CodeGlance screenshot" alt="CodeGlance screenshot">
        <p class="img-desc">实时根据代码显示缩略图</p>
      </div>
      <p>可以自定义一些配置项，包括滚动设置，宽度，显示位置等。</p>
      <div class="img-wrap" style="max-width:746px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnkskqc5hkj315g0wu0x8.jpg" class="img-2x img-show" title="CodeGlance screenshot" alt="CodeGlance screenshot">
        <p class="img-desc">自定义配置</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，打开一个代码文件即可看到缩略图啦。</p>

      <h2>Translation</h2>
      <h3>插件功能</h3>
      <p>选中文本后进行快捷翻译。</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:525px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnkttwtpftg30el0eln00.gif" class="img-2x img-show" title="Translation screenshot" alt="Translation screenshot">
        <p class="img-desc">快捷翻译</p>
      </div>
      <p>可以自定义一些配置项，包括翻译语言，翻译引擎配置等。</p>
      <div class="img-wrap" style="max-width:914px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnktut2yzaj31es0z4tf4.jpg" class="img-2x img-show" title="Translation screenshot" alt="Translation screenshot">
        <p class="img-desc">自定义配置</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，<kbd>选择文本或者鼠标指向文本</kbd> > <kbd>单击鼠标右键</kbd> > <kbd>Translate</kbd>。或者使用快捷键进行翻译。</p>
      <p>翻译引擎支持有道和谷歌，更多配置和使用详见<a href="https://github.com/YiiGuxing/TranslationPlugin">https://github.com/YiiGuxing/TranslationPlugin</a></p>

      <h2>String Manipulation</h2>
      <h3>插件功能</h3>
      <p>驼峰式命名和下划线命名等转换，配合自定义快捷键更佳。一般在java开发中，由于数据库字段长用下划线连接，而字段名多为驼峰格式，这时此插件就可以派上用场了。</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:789px;">
        <img src="https://ws2.sinaimg.cn/large/006tNc79ly1fnkzj9lbsig30lx0e54e0.gif" class="img-show" title="String Manipulation screenshot" alt="String Manipulation screenshot">
        <p class="img-desc">快捷翻译</p>
      </div>
      <p>可以自定义转换的快捷键，使用更方便。</p>
      <div class="img-wrap" style="max-width:914px;">
        <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fnl06d5ig3j31es0z4jyy.jpg" class="img-2x img-show" title="String Manipulation screenshot" alt="String Manipulation screenshot">
        <p class="img-desc">自定义配置</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，选中代码即可进行转换。</p>

      <h2>GsonFormat</h2>
      <h3>插件功能</h3>
      <p>把 JSON 字符串直接实例化成类。</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:789px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnl0gu0jlug30mr0i4dq3.gif" class="img-show" title="GsonFormat screenshot" alt="GsonFormat screenshot">
        <p class="img-desc">根据标准<code>json</code>串生成<code>java</code>类定义</p>
      </div>
      <p>一般开发过程中，若事先定义好接口然后再开始开发时，可以根据样例<code>json</code>快速生成类定义，简单配置一下后即可省去大量复制粘贴的体力活。</p>
      <div class="img-wrap" style="max-width:295px;">
        <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fnl0y1cxgej30km0g2q6u.jpg" class="img-2x img-show" title="GsonFormat screenshot" alt="GsonFormat screenshot">
        <p class="img-desc">定义空类后使用GsonFormat插件</p>
      </div>
      <div class="img-wrap" style="max-width:1074px;">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fnl0uod578g30tu0kfqv6.gif" class="img-show" title="GsonFormat screenshot" alt="GsonFormat screenshot">
        <p class="img-desc">复杂的对象也可以处理得很好</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，先新建一个空的类，然后使用快捷键<kbd>⌘</kbd>+<kbd>N</kbd>，选择GsonFormat，然后在弹出窗口里复制json串，即可快速生成。</p>

      <h2>Background Image Plus</h2>
      <h3>插件功能</h3>
      <p>IDE增加背景图片，让代码编写过程更加有(sao)趣(qi)。</p>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:1273px;">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fnyp9lwb5pj31kw14jqv6.jpg" class="img-2x img-show" title="Background Image Plus screenshot" alt="Background Image Plus screenshot">
        <p class="img-desc">显示效果</p>
      </div>
      <p>可以设置图片路径，配置自动切换时间，可设置透明度。</p>
      <div class="img-wrap" style="max-width:564px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnypaz3xduj30vc0ugwxc.jpg" class="img-2x img-show" title="Background Image Plus screenshot" alt="Background Image Plus screenshot">
        <p class="img-desc">支持的设置项</p>
      </div>
      <div class="img-wrap" style="max-width:560px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnyr09z1mog30fk0f4gu6.gif" class="img-show" title="Background Image Plus screenshot" alt="Background Image Plus screenshot">
        <p class="img-desc">透明度调节显示效果</p>
      </div>
      <h3>存在不足</h3>
      <p>当切换背景图片时，若图片文件较大，则会<strong style="color:red;">引起几秒钟卡顿</strong></p>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>，安装完成后，配置图片即可。</p>

      <h2>Mybatis plugin</h2>
      <h3>插件功能</h3>
      <p>Dao层接口与sql文件之间快捷定位的工具。</p>
      <ul>
        <li>
          <p>提供Mapper接口与配置文件中对应SQL的导航</p>
        </li>
        <li>
          <p>编辑XML文件时自动补全</p>
        </li>
        <li>
          <p>根据Mapper接口, 使用快捷键生成xml文件及SQL标签</p>
        </li>
        <li>
          <p>ResultMap中的property支持自动补全，支持级联(属性A.属性B.属性C)</p>
        </li>
        <li>
          <p>快捷键生成@Param注解</p>
        </li>
        <li>
          <p>XML中编辑SQL时, 括号自动补全</p>
        </li>
        <li>
          <p>XML中编辑SQL时, 支持参数自动补全(基于@Param注解识别参数)</p>
        </li>
        <li>
          <p>自动检查Mapper XML文件中ID冲突</p>
        </li>
        <li>
          <p>自动检查Mapper XML文件中错误的属性值</p>
        </li>
        <li>
          <p>支持Find Usage</p>
        </li>
        <li>
          <p>支持重构从命名</p>
        </li>
        <li>
          <p>支持别名</p>
        </li>
        <li>
          <p>自动生成ResultMap属性</p>
        </li>
        <li>
          <p>快捷键: <kbd>Option + Enter</kbd> (Mac) | <kbd>Alt + Enter</kbd> (Windows)</p>
        </li>
      </ul>
      <h3>插件截图</h3>
      <div class="img-wrap" style="max-width:568px;">
        <img src="https://ws1.sinaimg.cn/large/006tNc79ly1fnyw9u45tug30fs0exjy0.gif" class="img-show" title="Mybatis plugin screenshot" alt="Mybatis plugin screenshot">
        <p class="img-desc">链接效果</p>
      </div>
      <div class="img-wrap" style="max-width:756px;">
        <img src="https://ws4.sinaimg.cn/large/006tNc79ly1fnyw8jlavyj3160138acw.jpg" class="img-2x img-show" title="Mybatis plugin screenshot" alt="Mybatis plugin screenshot">
        <p class="img-desc">支持的设置项</p>
      </div>
      <h3>插件使用</h3>
      <p>安装步骤<a href="">参考插件安装</a>。</p>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'JetbrainsPluginRecommended',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
