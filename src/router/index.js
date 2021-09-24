// import Vue from '../vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import registerRoutes from './register-routes'

Vue.use(VueRouter)

export default new VueRouter({
  // history 刷新页面时直接请求了
  // mode: 'history',
  mode: 'hash',
  routes: registerRoutes()
})
