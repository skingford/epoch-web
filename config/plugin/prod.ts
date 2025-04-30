import { type PluginOption } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";

/**
 * 创建生产环境插件配置
 * 这些插件只在生产环境中加载
 */
export function createProdPlugins(rootDir: string): PluginOption[] {
  const plugins: PluginOption[] = [
    visualizer({
      open: false,
      filename: `${rootDir}/dist/report.html`,
      title: "Vite 打包分析",
      brotliSize: true,
      sourcemap: true,
    }),
  ];

  const legacyPlugin = legacy({
    targets: ["defaults", "not IE 11"],
    additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
  });

  plugins.push(legacyPlugin as PluginOption);

  return plugins;
}
