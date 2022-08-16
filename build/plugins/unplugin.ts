import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default Components({
  // ui库解析器，也可以自定义
  resolvers: [
    AntDesignVueResolver({
      resolveIcons: true,
    }),
  ],
});
