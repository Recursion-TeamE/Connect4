import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingPage from '../view/SettingPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/setting',
    name: 'SettingPage',
    component: SettingPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
