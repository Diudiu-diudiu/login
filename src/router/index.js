import HomePage from '@/components/HomePage.vue';
import LognView2 from '@/components/LognView2.vue';
import NewAccount from '@/components/NewAccount.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
  {
    path: '/HomePage',
    component: HomePage,
  },

  {
    path: '/NewAccount',
    component: NewAccount,
  },

  {
    path: '/',
    component: LognView2,
  },
];
const router = new VueRouter({
  mode: 'hash',
  routes,
})
export default router;