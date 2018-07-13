import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import ResetPw from '@/components/ResetPw'
import Admin from '@/components/Admin'
import VNews from '@/components/VNews'
import VWeather from '@/components/VWeather'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/resetpw',
      name: 'ResetPw',
      component: ResetPw
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/vnews',
      name: 'VNews',
      component: VNews
    },
    {
      path: '/vweather',
      name: 'VWeather',
      component: VWeather
    }
  ]
})
