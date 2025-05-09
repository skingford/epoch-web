import { UserConfig } from "vite";


export interface ViteConfigOptions {
  rootDir: string;
  isProd: boolean;
  plugins?: any[];
  additionalConfig?: Partial<UserConfig>;
}

export function createViteConfig(options: ViteConfigOptions): UserConfig {
  const { rootDir, isProd, plugins = [], additionalConfig = {} } = options;

  return {
    define: {
      __DEV__: JSON.stringify(!isProd),
      __APP_VERSION__: JSON.stringify("1.0.0"),
      __APP_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
      __APP_FEATURE_FLAGS__: JSON.stringify({
        NEW_DASHBOARD: true,
        EXPERIMENTAL_API: false,
      }),
    },
    plugins,
    resolve: {
      alias: {
        "@": `${rootDir}/src`,
        "@config": `${rootDir}/config`,
      },
    },
    optimizeDeps: {
      exclude: [],
      include: ["vue", "vue-router", "pinia", "lodash-es"],
    },
    css: {
      devSourcemap: !isProd,
      modules: {
        localsConvention: "camelCaseOnly",
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variables.scss" as *;',
        },
      },
    },
    build: {
      target: "es2015",
      outDir: "dist",
      assetsDir: "assets",
      minify: isProd ? "terser" : false,
      sourcemap: !isProd,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["vue", "vue-router", "pinia"],
          },
        },
      },
    },
    server: {
      host: true,
      port: 8080,
    },
    ...additionalConfig,
  };
} 