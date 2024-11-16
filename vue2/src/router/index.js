import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '@/views/Home';
import pageRoutes from '@/modules/pages/router/route.js';
Vue.use(VueRouter);

const routes = [
   { path: '/', component: HomeView },
    ...pageRoutes,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
