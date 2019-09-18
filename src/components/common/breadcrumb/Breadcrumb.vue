<template>
  <div class="breadcrumb-wrap">
    <div class="breadcrumb-cell breadcrumb-node" :class="{'breadcrumb-root': index === 0}" v-for="(item, index) in breadcrumbList" :key="index">
      <span class="breadcrumb-text"><a v-if="item.link !== ''" :href="item.link">{{item.name}}</a><a v-else>{{item.name}}</a></span>
      <span v-show="index < breadcrumbList.length - 1" class="breadcrumb-separator">/</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  inheritAttrs: false,
  props: {
    breadcrumbList: {
      type: Array,
      require: true
    }
  },
  created () {
    ;
  }
}
</script>

<style scoped>

</style>
