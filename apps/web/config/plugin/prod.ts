import { type PluginOption } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";

/**
 * 创建生产环境插件配置
 * 这些插件只在生产环境中加载
 */
export function createProdPlugins(rootDir: string): PluginOption[] {
  // TODO：根据配置开启对应插件
  const plugins: PluginOption[] = [
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: "gzip",
      ext: ".gz",
      deleteOriginFile: false,
    }),
  ];

  const visualizerPlugin = visualizer({
    open: false,
    filename: `${rootDir}/dist/report.html`,
    title: "Vite 打包分析",
    brotliSize: true,
  })

  plugins.push(visualizerPlugin as PluginOption);

  const legacyPlugin = legacy({
    targets: ["defaults", "not IE 11"],
    additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
  });

  plugins.push(legacyPlugin as PluginOption);

  return plugins;
}
