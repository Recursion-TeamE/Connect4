import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/setting',
    name: 'SettingPage',
    component: () => import("./view/SettingPage.vue"),
  }
]

const router = new VueRouter({
  routes,
});

export default router;