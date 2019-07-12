import Vue from 'vue'
import './plugins/authentication'
import Router from 'vue-router'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Forecast from '@/components/Forecast'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', exact: true, redirect: '/forecast' },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    {
      path: '/forecast',
      name: 'Forecast',
      component: Forecast,
      beforeEnter: (to, from, next) => {
        if (Vue.$isAuthenticated()) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})
