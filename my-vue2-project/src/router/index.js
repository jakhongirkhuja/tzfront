import Vue from 'vue';
import VueRouter from 'vue-router';
import pageRoutes from '@/modules/pagesSection/route.js'
Vue.use(VueRouter);

const routes = [
    ...pageRoutes,
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
