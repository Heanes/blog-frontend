import Vue from 'vue'
import router from './_router';
import App from './ArticleDetail'

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
