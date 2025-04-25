import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import legacy from '@vitejs/plugin-legacy'
import { viteVConsole } from 'vite-plugin-vconsole';
import {resolve} from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  plugins: [
    vue(),
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
  server: {
    host: true, // 允许局域网访问
    port: 8080
  },
})
