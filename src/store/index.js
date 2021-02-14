import Vue from 'vue'
import Vuex from 'vuex'
import { LoginSinac } from '@/modules/login/store';
import { HomeStore } from '@/pages/store';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: { ...LoginSinac },
    home: { ...HomeStore},
  },
})

export default store;