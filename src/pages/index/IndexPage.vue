<template>
    <he-layout>
        <div class="main" slot="main">
        </div>
    </he-layout>
</template>

<script>
import HeLayout from '../_layout/normal/Layout';

import '../static/css/index/index.scss'

export default {
  name: 'Index',
  components: {
    'he-layout': HeLayout
  },
  data () {
    return {
      pageTitle: '首页'
    }
  },
  created () {
    document.title = 'index page'
  }
}
</script>

<style scoped>

</style>
