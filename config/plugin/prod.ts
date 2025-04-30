import { type PluginOption } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

/**
 * 创建生产环境插件配置
 * 这些插件只在生产环境中加载
 */
export function createProdPlugins(rootDir: string): PluginOption[] {
  return [
    // 配置输出文件
    visualizer({
      open: true,
      filename: `${rootDir}/dist/report.html`,
      title: 'Vite 打包分析',
      brotliSize: true,
      sourcemap: true
    })
  ]
}