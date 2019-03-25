<template>
  <he-article-detail>
    <template slot="articleTitle">SQL一些特殊需求的编写技巧</template>
    <template slot="articleContent">
      <h2>给查询记录添加行号</h2>
      <p>一般情况下，查询结果中没有每行的行号，此时用以下方法就可以解决了。</p>
      <h3>查询代码</h3>
      <pre class="brush:sql">
select @row_no:=@row_no+1 as row_no, t.*
from t_test1 t, (select @row_no:=0) b
</pre>
      <p>其中t是指需要查询的数据表。</p>
      <h3>示例</h3>
      <div class="img-wrap" style="max-width:796px;">
        <img src="//cdn.heanes.com/webimg/recordNumber_screenshot.png" class="img-2x img-show" title="keyboard setting lock screen" alt="keyboard setting lock screen">
        <p class="img-desc">行号示例</p>
      </div>
      <h2>union查询中为结果添加来源表字段</h2>
      <p>有时候查问题时，若存在union查询的情况，查询出的结果有很多条时，要想知道每行结果到底是来自联合查询的哪个表时，就可以用一下方法。</p>
      <h3>查询代码</h3>
      <pre class="brush:sql">
select 't1' as dbName, t1.* from t_test1 t1
union
select 't2' as dbName, t2.* from t_test2 t2
union
select 't3' as dbName, t3.* from t_test3 t3
</pre>
      <h3>示例</h3>
      <div class="img-wrap" style="max-width:717px;">
        <img src="//cdn.heanes.com/webimg/unionQueryMarkDbName_screenshot.png" class="img-2x img-show" title="keyboard setting lock screen" alt="keyboard setting lock screen">
        <p class="img-desc">union查询表名示例</p>
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: 'SpecificSqlWriteTechnique',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
