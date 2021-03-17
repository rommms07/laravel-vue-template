import Vue from 'vue';
import Router from 'vue-router';
import { createRouterLayout } from 'vue-router-layout';

import { routes } from '@/router/routes';

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => {
  return import(`@/layouts/${layout}.vue`);
});

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: RouterLayout,
      children: routes
    }
  ]
});
