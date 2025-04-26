import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { createVitePlugins } from './config/plugin';



const rootDir = fileURLToPath(new URL('./', import.meta.url));

export default defineConfig(({ mode }) => {
  console.log('[ vite.config::mode  ] >', mode)
  const isProd = mode === 'production';

  return {
    plugins: createVitePlugins(rootDir, isProd),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@config': fileURLToPath(new URL('./config', import.meta.url)),
      }
    },
    server: {
      host: true, // 允许局域网访问
      port: 8080
    },
  }
})

// https://vite.dev/config/
// export default defineConfig({
//   plugins: createVitePlugins(rootDir),
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url)),
//       '@config': fileURLToPath(new URL('./config', import.meta.url)),
//     }
//   },
//   server: {
//     host: true, // 允许局域网访问
//     port: 8080
//   },
// })
