import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index.js';
import store from './store/index.js';

import HeUI from 'he-ui-vue';
import 'he-ui-vue/src/theme/default/index.scss';
import '@/assets/css/common/common.scss';

import pageCommonMixin from '@/mixins/global/pageCommon.js';

Vue.config.productionTip = false;

Vue.use(HeUI);
// 全局混入，考虑用插件形式
Vue.mixin(pageCommonMixin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
