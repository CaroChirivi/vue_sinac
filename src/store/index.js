import Vue from 'vue'
import Vuex from 'vuex'
import { LoginSinac } from '@/modules/login/store';

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    login: { ...LoginSinac },
  },
})

export default store;