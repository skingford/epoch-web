import type { RouteRecordRaw } from 'vue-router'

export function buildRoutes(menuData) {
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