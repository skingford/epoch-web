import { type PluginOption } from "vite";
import { createBasePlugins } from "./base";
import { createDevPlugins } from "./dev";
import { createProdPlugins } from "./prod";

/**
 * 创建 Vite 插件配置
 * 根据环境变量动态加载不同的插件
 */
export function createVitePlugins(
  rootDir: string,
  isProd: boolean
): PluginOption[] {
  const vitePlugins: PluginOption[] = [...createBasePlugins(rootDir)];

  if (!isProd) {
    // 开发环境加载的插件
    vitePlugins.push(...createDevPlugins(rootDir));
  } else {
    // 生产环境加载的插件
    vitePlugins.push(...createProdPlugins(rootDir));
  }

  return vitePlugins;
}
