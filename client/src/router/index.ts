import { Vue } from 'vue-property-decorator';
import VueRouter from 'vue-router';
import { createRouterLayout } from 'vue-router-layout';
import routes from 'vue-auto-routing';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: createRouterLayout(layout => import(`@/layouts/${layout}.vue`)),
      children: routes
    }
  ]
})

export default router;
