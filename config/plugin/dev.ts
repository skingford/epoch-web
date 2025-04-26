import { type PluginOption } from 'vite'
import eslintPlugin from 'vite-plugin-eslint'
import { viteVConsole } from 'vite-plugin-vconsole'

/**
 * 创建开发环境插件配置
 * 这些插件只在开发环境中加载
 */
export function createDevPlugins(rootDir: string): PluginOption[] {
  return [
    eslintPlugin({
      include: [
        `${rootDir}/src/**/*.ts`,
        `${rootDir}/src/**/*.tsx`,
        `${rootDir}/src/**/*.vue`,
      ]
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