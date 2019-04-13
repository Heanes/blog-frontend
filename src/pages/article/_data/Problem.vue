<template>
  <he-article-detail>
    <template slot="articleTitle">wms-inbound连续几天系统崩溃问题排查</template>
    <template slot="articleContent">
      <h2>1. 问题症状</h2>
      <p>wms-inbound连续几天崩溃，需要运维重启</p>
      <div class="img-wrap" style="max-width:973px;">
        <img src="/public/upload/image/problem/reboot_1.png" class="img-2x img-show" title="picture example" alt="picture example">
        <p class="img-desc">2019-04-02 12:55:56 重启</p>
      </div>
      <div class="img-wrap" style="max-width:930px;">
        <img src="/public/upload/image/problem/reboot_2.png" class="img-2x img-show" title="picture example" alt="picture example">
        <p class="img-desc">2019-04-01 10:57:03 重启</p>
      </div>
      <h2>2. 问题定位</h2>
      <h3>1. 查崩溃内存堆栈</h3>
      <p>根据刘强排查崩溃内存堆栈，发现出现问题较多的方法是</p>
      <pre>
com.sprucetec.wms.inbound.returnorder.service.impljudgeAllCanceldInOneContainer.judgeAllCanceldInOneContainer
</pre>
      <p>上级调用方为本类 <code>cancelOneConReceive</code>方法，即客退取消收货接口</p>
      <div class="img-wrap" style="max-width:1145px">
        <img src="/public/upload/image/problem/cancle_receive.png" class="img-2x img-show" title="picture example" alt="picture example">
      </div>
      <div class="img-wrap" style="max-width:975px">
        <img src="/public/upload/image/problem/judge_method.png" class="img-2x img-show" title="picture example" alt="picture example">
      </div>
      <h3>2. 原业务处理逻辑</h3>
      <ul>
        <li>1. 客退取消收货，查询之前的收货流水，将其流水状态置为“收货取消”状态</li>
        <li>2. 再根据之前容器使用的流水，判断该容器包含的收货是否全部都取消，如果全部都取消了，则释放该容器</li>
      </ul>
      <div class="notice warning">
        <p>[注]：收货流水有三个状态，“取消收货”，“收货完成”、“完成上架”，“收货完成”表示货品仍存放在该容器上，“完成上架”就表示容器的货品已上架到另外容器上。</p>
      </div>
      <h3>2. 出现问题问题原因：</h3>
      <ul>
        <li>1. 上述第二步中判断容器收货是否全部取消，会按【仓ID】和【容器ID】查询该容器的所有流水记录，然后遍历流水记录，如果存在一个还处于“收货完成”状态的流水，就认为这个容器还在使用，不能释放，判断结束。</li>
        <li>2. 去线上数据库统计数据可知，上海分片中，仓ID为47的收货流水中，容器ID为370670的收货流水有244426条（24万+条），导致内存崩掉。</li>
      </ul>
      <div class="img-wrap" style="max-width:664px">
        <img src="/public/upload/image/problem/container_group_count.png" class="img-2x img-show" title="picture example" alt="picture example">
      </div>

      <h2>3. 解决办法</h2>
      <p>修改判断逻辑，将原业务查容器全部流水改为统计该容器流水状态为“收货完成”的个数，如果大于0，则表示该容器收货没有全部取消，判断结束。</p>
      <div class="img-wrap" style="max-width:1267px">
        <img src="/public/upload/image/problem/new_judge.png" class="img-2x img-show" title="picture example" alt="picture example">
      </div>
      <div class="img-wrap" style="max-width:726px">
        <img src="/public/upload/image/problem/new_judge_sql.png" class="img-2x img-show" title="picture example" alt="picture example">
      </div>
    </template>
  </he-article-detail>
</template>

<script>
import HeArticleDetail from '@/components/article/ArticleDetail';

export default {
  name: '',
  components: {
    'he-article-detail': HeArticleDetail
  }
}
</script>

<style scoped>

</style>
