import { Vue } from 'vue-property-decorator';
import { createRouterLayout } from 'vue-router-layout';
import Router, { RouteConfig } from 'vue-router';
import routes from 'vue-auto-routing';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: createRouterLayout(layout => import(`@/layouts/${layout}.vue`)),
      children: routes as RouteConfig[]
    }
  ]
});

export default router;
