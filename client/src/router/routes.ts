import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    name: 'login',
    path: 'guest/login',
    component: require('@/pages/index.vue').default,
  },
  {
    name: 'profile',
    path: 'auth/profile',
    component: require('@/pages/auth/profile.vue').default,
  }
];