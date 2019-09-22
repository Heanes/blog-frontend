const mixin = {
  data () {
    return {
      pageTitleSuffix: 'blog'
    }
  },
  methods: {
    getPageTitle () {
      if(!this.pageTitle){
        this.$message.warning('请设置页面标题');
      }
      return this.pageTitle;
    },
    setPageTitle (pageTitle) {
      pageTitle = pageTitle || this.getPageTitle();
      document.title = pageTitle + ' - ' + this.pageTitleSuffix;
    }
  }
};

export default mixin;
