import legacy from '@vitejs/plugin-legacy'
import { visualizer } from 'rollup-plugin-visualizer'
import { type PluginOption } from 'vite'

/**
 * 创建生产环境插件配置
 * 这些插件只在生产环境中加载
 */
export function createProdPlugins(): PluginOption[] {
  return [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    visualizer()
  ]
}