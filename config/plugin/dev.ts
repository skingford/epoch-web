import { type PluginOption } from "vite";
import { viteVConsole } from "vite-plugin-vconsole";

/**
 * 创建开发环境插件配置
 * 这些插件只在开发环境中加载
 */
export function createDevPlugins(rootDir: string): PluginOption[] {
  return [
    viteVConsole({
      entry: `${rootDir}/src/main.ts`,
      enabled: true,
      config: {
        log: {
          maxLogNumber: 1000,
        },
        theme: "light", // light | dark
      },
    }),
  ];
}
