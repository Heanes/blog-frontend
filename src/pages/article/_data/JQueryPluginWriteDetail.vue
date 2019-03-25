<template>
  <he-article-detail>
    <template slot="articleTitle">jQuery插件编写详解</template>
    <template slot="articleContent">
      <h2>插件常规目录说明</h2>
      <p>一般jQuery插件开发可以按此目录组织文件。</p>
      <div class="img-wrap" style="max-width:628px">
        <img src="https://ws3.sinaimg.cn/large/006tNc79ly1fsodctv9gzj30yw0kwwgg.jpg" class="img-show" title="jQuery plugin path" alt="jQuery plugin path">
        <p class="img-desc">插件目录组织</p>
      </div>
      <pre>
.
├── build                           --构建目录
│   ├── grunt                       --grunt构建工具
│   ├── gulp                        --gulp构建工具
│   ├── webpack                     --webpack构建工具
│   └── pluginName.info.json        --插件信息json
├── dist                            --构建后生成文件存放位置
│   ├── css                         --构建生成的css
│   │   ├── pluginName.css
│   │   ├── pluginName.min.css
│   │   └── pluginName.min.css.map
│   └── js                          --构建生成的js
│       ├── pluginName.js
│       ├── pluginName.js.map
│       └── pluginName.min.js
├── doc                             --说明文档目录
│   ├── demo                        --示例目录
│   │   ├── demoPage1
│   │   └── demoPage2
│   ├── static                      --说明文档需要用的静态资源文件夹
│   │   ├── css
│   │   ├── image
│   │   ├── js
│   │   │   └── demo.js
│   │   └── vendor                  --静态资源中需要用到的第三方插件及其他资源
│   │       ├── fonts
│   │       ├── js
│   │       │   └── jquery
│   │       │       └── 2.2.4
│   │       │           └── jquery.2.2.4.min.js
│   │       └── pluginName
│   │           └── 1.0.0
│   │               ├── css
│   │               │   ├── pluginName.css
│   │               │   ├── pluginName.min.css
│   │               │   └── pluginName.min.css.map
│   │               └── js
│   │                   ├── pluginName.js
│   │                   ├── pluginName.js.map
│   │                   └── pluginName.min.js
│   └── index.html                  --说明文档起始页
├── src                             --源文件目录
│    ├── css                        --css源文件
│    │   ├── pluginName.css
│    │   ├── pluginName.css.map
│    │   └── pluginName.scss
│    └── js                         --js源文件
│        └── pluginName.js
├── index.d.ts                      --插件typescript说明
├── Gruntfile.js                    --gruntfile构建用的配置文件
├── LICENSE
├── package-lock.json
├── package.json
└── README.md
</pre>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'JQueryPluginWriteDetail',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
