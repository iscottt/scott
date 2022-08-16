import AutoImport from 'unplugin-auto-import/vite';

export default AutoImport({
  imports: ['vue', 'vue-router', '@vueuse/head', '@vueuse/core'],
  // 可以选择auto-import.d.ts生成的位置，使用ts建议设置为'src/auto-import.d.ts'
  // dts: 'src/auto-import.d.ts'
});
