<template>
  <div class="index">
    <h2 class="title">Welcome! This is index page.</h2>
    <p>{{baseCommon}}</p>
  </div>
</template>

<script>

import http from '@/api/index.js';

export default {
  name: 'PageIndex',

  components: {
  },

  data() {
    return {
      baseCommon: {}
    }
  },

  created () {
  },
  async mounted () {
    // this.baseCommon = await api.common.queryBaseCommon();
  }
}
</script>

<style scoped>

</style>
