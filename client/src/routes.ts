import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
  {
    name: 'root-page',
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: {
      globalRoute: true
    }
  },

  {
    name: 'admin-root-page',
    path: '/admin',
    component: () => import('@/pages/admin/index.vue'),
    meta: {
      authenticatedUserOnly: true
    }
  },

  /** auth */
  {
    name: 'auth-root-page',
    path: '/auth',
    component: () => import('@/pages/auth/index.vue')
  },

  {
    name: 'auth-login-page',
    path: '/auth/login',
    component: () => import('@/pages/auth/login.vue')
  },
  
  {
    name: 'auth-signup-page',
    path: '/auth/signup',
    component: () => import('@/pages/auth/sign-up.vue')
  },

  {
    path: '*',
    redirect: '/auth/login'
  },

];