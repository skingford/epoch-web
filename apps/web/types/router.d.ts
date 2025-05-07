import 'vue-router'



declare module 'vue-router' {
  interface RouteMeta {
    name?: string
    isAdmin?: boolean
    requiresAuth?: boolean
    keepAlive?: boolean
  }
}


// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export {}