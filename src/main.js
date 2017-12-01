// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = 'http://localhost:4000/api/0001/';
// The deployed api. The words aren't in the deployed library.
// Vue.axios.defaults.baseURL = 'https://peaceful-forest-74170.herokuapp.com/api/0001/'

Vue.filter('to-lowercase', function(value) {
  return value.toLowerCase();
});

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
