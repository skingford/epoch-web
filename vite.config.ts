import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import { viteVConsole } from 'vite-plugin-vconsole';
import { resolve } from 'path';
import eslintPlugin from 'vite-plugin-eslint'
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.ts']
    }),
    visualizer(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia']
    }),
    viteVConsole({
      entry: resolve('src/main.ts'),
      enabled: true,
      config: {
        log: {
          maxLogNumber: 1000,
        },
        theme: 'light', // light | dark
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    }
  },
  server: {
    host: true, // 允许局域网访问
    port: 8080
  },
})
