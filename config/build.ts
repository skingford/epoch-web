import type { BuildEnvironmentOptions } from "vite";

export function createBuildConfig(): BuildEnvironmentOptions {
  return {
    minify: "terser",
    assetsInlineLimit: 4096, // 4kb 以下的文件转为 base64,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log", "console.info"],
        passes: 2,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // 提取公共模块
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "[ext]/[name]-[hash].[ext]",
        // 分包
        manualChunks(id) {
          if (id.includes("node_modules")) {
            // 将 node_modules 中的代码分割成独立的 chunk
            const packageName = id.match(
              /node_modules[\/\\](?:\.pnpm[\/\\])?([^\/\\]+)/
            )?.[1];
            if (packageName) {
              // 根据包名进行分包
              if (/^@?vue/.test(packageName)) return "vue-vendor";
              if (/^@?pinia/.test(packageName)) return "pinia-vendor";
              if (/^@?axios/.test(packageName)) return "axios-vendor";
              // 其他依赖包统一打包
              return "common-vendor";
            }
          }
        },
      },
    },
  };
}
