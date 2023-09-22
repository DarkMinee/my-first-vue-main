import Vue from 'vue'
import Router from 'vue-router'
import SignUp from '@/components/SignUp'
import SignOut from '@/components/SignOut'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: SignUp
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
