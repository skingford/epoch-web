import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import eslintPlugin from 'vite-plugin-eslint'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import { viteVConsole } from 'vite-plugin-vconsole';


export function createVitePlugins(rootDir: string) {
  return [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'types/auto-imports.d.ts', // 生成的自动导入声明文件
    }),
    Components({
      dirs: ['src/components'], // 目标文件夹
      extensions: ['vue', 'jsx'], // 文件类型
      dts: 'types/components.d.ts', // 输出文件，里面都是一些import的组件键值对
      resolvers: [],
    }),
    eslintPlugin({
      include: [
        `${rootDir}/src/**/*.ts`,
        `${rootDir}/src/**/*.tsx`,
        `${rootDir}/src/**/*.vue`,
      ]
    }),
    visualizer(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    viteVConsole({
      entry: `${rootDir}/src/main.ts`,
      enabled: true,
      config: {
        log: {
          maxLogNumber: 1000,
        },
        theme: 'light', // light | dark
      }
    })
  ]
}