import { type PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { createHtmlPlugin } from "vite-plugin-html";
import pkg from "../../package.json";

/**
 * 创建基础插件配置
 * 这些插件在所有环境中都会被加载
 */
export function createBasePlugins(rootDir: string): PluginOption[] {
  return [
    vue(),
    createHtmlPlugin({
      entry: `${rootDir}/src/main.ts`,
      inject: {
        data: {
          title: pkg.name,
          version: pkg.version,
        },
      },
    }),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: "Icon",
        })
      ],
      imports: ["vue", "vue-router", "pinia"],
      dts: "types/auto-imports.d.ts", // 生成的自动导入声明文件
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
      // dirs: ["src/components"], // 目标文件夹
      // extensions: ["vue", "jsx"], // 文件类型
      dts: "types/components.d.ts", // 输出文件，里面都是一些import的组件键值对
    }),
    Icons({
      autoInstall: true,
    }),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [`${rootDir}/src/assets/svg`],
      // Specify symbolId format
      symbolId: "icon-[dir]-[name]",
    }),
  ];
}
