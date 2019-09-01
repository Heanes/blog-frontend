<template>
  <div id="app">
    <hec-header></hec-header>
    <router-view/>
    <hec-footer></hec-footer>
    <hec-line-mark v-if="siteConfig.showLineMark"></hec-line-mark>
  </div>
</template>

<script>
import '@/assets/css/common/common.scss'
import http from '@/api/index.js';
import siteConfig from '@/config/index.js';

import HecHeader from '@/components/layout/normal/Header';
import HecFooter from '@/components/layout/normal/Footer';
import HecLineMark from '@/components/layout/normal/LineMark.vue';

export default {
  name: 'App.vue',
  components: {
    HecHeader,
    HecFooter,
    HecLineMark
  },
  data () {
    return {
      baseCommon: {},
      siteConfig: siteConfig
    }
  },
  methods: {
    // 获取网站基本数据
    getBaseCommon (param) {
      http.common.queryBaseCommon(param)
        .then(response => {
          this.baseCommon = response.data;
        });
    }
  },
  mounted () {
    this.getBaseCommon();
  }
}
</script>

<style scoped>

</style>
