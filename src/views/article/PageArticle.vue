<template>
  <router-view/>
</template>

<script>
export default {
  name: 'PageArticle',
  components: {
  },
  data () {
    return {
      pageTitle: '文章列表',
      breadcrumbList: [
        {
          name: '首页',
          link: '/'
        },
        {
          name: '文章列表',
          link: '/article/list.html'
        }
      ]
    }
  },
  methods: {
  },
  created () {
    this.setPageTitle();
  },
  mounted () {
  },
  watch: {
  }
}
</script>

<style scoped>

</style>
