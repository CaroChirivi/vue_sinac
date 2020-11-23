import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import '@/components';
import '@/assets/scss/main.scss';
//import { func } from '@/assets/js/forms.js'

//Vue.prototype.$func = func

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
