import Vue from 'vue'
import VueRouter from 'vue-router'
import { LoginRoutes } from '@/modules/login/routes'

import HomePage from '@/pages/Home'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: {
      requiresAuth: true
    }
  },
    ...LoginRoutes
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  console.log(from);
  console.log(to);

  if(to.matched.some( record => record.meta.requiresAuth)) { //routes authentication required
    
    if(store.getters['login/isUserConnected']) {
      
      next()
      return
    }
    next('/signin')

  }else{
    next() //routes not authentication required
  }

})

export default router
