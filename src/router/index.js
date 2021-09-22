// import Vue from '../vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import registerRoutes from './register-routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: registerRoutes()
})
