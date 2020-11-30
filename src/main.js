import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import vSelect from "vue-select";
 
Vue.component("v-select", vSelect);
import 'vue-select/dist/vue-select.css';
import "vue-select/src/scss/vue-select.scss";

import '@/components';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
