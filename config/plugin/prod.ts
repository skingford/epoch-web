import { type PluginOption } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

/**
 * 创建生产环境插件配置
 * 这些插件只在生产环境中加载
 */
export function createProdPlugins(): PluginOption[] {
  return [
    visualizer()
  ]
}