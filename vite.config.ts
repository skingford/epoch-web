import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { createVitePlugins } from "./config/plugin";
import { createBuildConfig } from "./config/build";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";
  const rootDir = fileURLToPath(new URL("./", import.meta.url));
  console.log("[ vite.config::mode  ] >", mode, rootDir);

  return {
    plugins: createVitePlugins(rootDir, isProd),
    resolve: {
      alias: {
        "@": `${rootDir}/src`,
        "@config": `${rootDir}/config`,
      },
    },
    css: {
      devSourcemap: !isProd,
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
