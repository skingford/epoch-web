import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { layoutRoutes } from './layout'

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/pages/login/index.vue'),
  },
  ...layoutRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/',
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


router.beforeEach((to, from) => {
  console.log("===beforeEach====", to, from)
  // if (to.meta.requiresAuth && !auth.isLoggedIn()) {
  //   return {
  //     path: '/login',
  //     // 保存我们所在的位置，以便以后再来
  //     query: { redirect: to.fullPath },
  //   }
  // }

  // 而此时 Pinia 也已经被安装。
  //const store = useStore()
})

router.afterEach((to, from) => {
  console.log("===afterEach====", to, from)
})


// 添加路由
// router.addRoute({ path: '/new', component: NewComponent })

// // 删除路由
// router.removeRoute('route-name')


export function buildKeepAliveRoutes(routes: RouteRecordRaw[]) {
  const keepAliveRoutes: string[] = [];
  const routeStack: any[] = [...routes];

  while (routeStack.length > 0) {
    const route = routeStack.pop();

    if (route.meta?.keepAlive && route.name) {
      keepAliveRoutes.push(route.name);
    }

    if (route.children && route.children.length > 0) {
      routeStack.push(...route.children);
    }
  }

  return keepAliveRoutes;
}

const buildRoutes = (menuData) => {
  return menuData.map(item => ({
    path: item.path,
    name: item.name,
    component: () => import(`@/views/${item.component}.vue`),
    meta: {
      title: item.meta.title,
      icon: item.meta.icon,
      requiresAuth: true
    },
    children: item.children ? buildRoutes(item.children) : []
  }))
}