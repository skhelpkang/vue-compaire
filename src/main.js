import Vue from 'vue'
import SuiVue from 'semantic-ui-vue';

Vue.config.productionTip = false
Vue.use(SuiVue);

import App from './App'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
