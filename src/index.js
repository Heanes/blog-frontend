import Vue from 'vue';
import App from './views/App.vue';
import router from './router/index.js';
import store from './store/index.js';

import HeUI from 'he-ui-vue';
import 'he-ui-vue/src/theme/default/index.css';

Vue.config.productionTip = false;

Vue.use(HeUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
