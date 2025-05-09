import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { createVitePlugins } from "./config/plugin";
import { createBuildConfig } from "./config/build";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const rootDir = fileURLToPath(new URL("./", import.meta.url));

  return {
    // define 用于定义全局常量替换方式，构建时会静态替换这些值
    define: {
      // 是否为开发环境
      __DEV__: JSON.stringify(!isProd),
      // 应用版本号
      __APP_VERSION__: JSON.stringify("1.0.0"),
      // 应用构建时间
      __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      // 功能开关标记
      __APP_FEATURE_FLAGS__: JSON.stringify({
        NEW_DASHBOARD: true, // 新仪表盘功能开关
        EXPERIMENTAL_API: false, // 实验性API功能开关
      }),
    },
    plugins: [...createVitePlugins(rootDir, isProd)],
    resolve: {
      alias: {
        "@": `${rootDir}/src`,
        "@config": `${rootDir}/config`,
      },
    },
    optimizeDeps: {
      // 排除不需要预构建的库
      exclude: [],
      // 预构建常用依赖
      include: ["vue", "vue-router", "pinia", "lodash-es"],
    },
    css: {
      devSourcemap: !isProd,
      modules: {
        localsConvention: "dashesOnly",
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variables.scss" as *;',
        },
      },
    },
    build: createBuildConfig(),
    server: {
      host: true, // 允许局域网访问
      port: 8080,
    },
  };
});
