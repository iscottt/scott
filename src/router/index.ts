import type { App } from 'vue';
import Layout from '@/layout/index.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { createRouterGuard } from './guard';
export const constantRoutes = [
  {
    name: 'root',
    path: '/',
    redirect: '/home',
    meta: {
      title: 'Scott',
    },
    component: Layout,
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: 'Scott',
        },
        component: () => import('@/views/home/index.vue'),
      },
      {
        name: 'skills',
        path: '/skills',
        meta: {
          title: '技能',
        },
        component: () => import('@/views/skills/index.vue'),
      },
      {
        name: 'experience',
        path: '/experience',
        meta: {
          title: '经历',
        },
        component: () => import('@/views/experience/index.vue'),
      },
    ],
  },
];

const { VITE_BASE_URL } = import.meta.env;
export const router = createRouter({
  history: createWebHashHistory(VITE_BASE_URL),
  routes: constantRoutes,
});
export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}
