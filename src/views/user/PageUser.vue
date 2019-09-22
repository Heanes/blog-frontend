<!--
 * @doc 个人主页页面
 * @author Heanes
 * @time 2019-09-22 17:04:04 周日
-->
<template>
  <div class="main main-width">
    <div class="page-header">用户</div>
  </div>
</template>

<script>
import http from '@/api/index.js';

export default {
  name: 'HecPageUser',
  components: {
  },
  data () {
    return {
      pageTitle: '个人主页'
    }
  },
  methods: {
  },
  mounted(){
  },
  created () {
    this.setPageTitle();
  }
}
</script>

<style scoped>

</style>
