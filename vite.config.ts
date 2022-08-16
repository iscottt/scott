import { defineConfig, loadEnv } from 'vite';
import { resolvePath } from './build';
import { setupVitePlugins } from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  const vitePath = resolvePath('./', import.meta.url);
  const viteEnv = loadEnv(configEnv.mode, `.env.${configEnv.mode}`) as ImportMetaEnv;
  return {
    base: viteEnv.VITE_BASE_URL,
    resolve: {
      alias: {
        '~': vitePath.root,
        '@': vitePath.src,
      },
    },
    plugins: setupVitePlugins(configEnv, vitePath.src, viteEnv),
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: {},
        },
      },
    },
  };
});
