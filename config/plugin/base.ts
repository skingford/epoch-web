import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { type PluginOption } from 'vite'

/**
 * 创建基础插件配置
 * 这些插件在所有环境中都会被加载
 */
export function createBasePlugins(): PluginOption[] {
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
  ]
}