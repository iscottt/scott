import type { Router } from 'vue-router';
import { useTitle } from '@vueuse/core';
import NProgress from 'nprogress'; // progress bar
NProgress.configure({
  showSpinner: false,
});
/**
 * 路由守卫函数
 * @param router - 路由实例
 */
export function createRouterGuard(router: Router) {
  router.beforeEach(async () => {
    // 开始 loadingBar
    NProgress.start();
  });
  router.afterEach((to) => {
    // 设置document title
    useTitle(to.meta.title as string);
    // 结束 loadingBar
    NProgress.done();
  });
}
