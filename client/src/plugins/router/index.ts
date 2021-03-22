import { Vue } from 'vue-property-decorator';
import { createRouterLayout } from 'vue-router-layout';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { routes as children } from '@/routes';

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: createRouterLayout(layout => import(`@/layouts/${layout}.vue`)),
      children
    }
  ]
});

export default VueRouter;