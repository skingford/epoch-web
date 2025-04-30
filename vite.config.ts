import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { createVitePlugins } from './config/plugin';


export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const rootDir = fileURLToPath(new URL('./', import.meta.url));
  console.log('[ vite.config::mode  ] >', mode, rootDir);

  return {
    plugins: createVitePlugins(rootDir, isProd),
    resolve: {
      alias: {
        '@': `${rootDir}/src`,
        '@config': `${rootDir}/config`,
      }
    },
    css: {
      devSourcemap: !isProd,
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/variables.scss" as *;'
        }
      }
    },
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
          passes: 2
        },
        format: {
          comments: false
        }
      },
      target: 'es2015',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['vue', 'vue-router', 'pinia']
          }
        }
      }
    },
    server: {
      host: true, // 允许局域网访问
      port: 8080
    },
  }
})