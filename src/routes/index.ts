import { createWebHashHistory, createRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    component: () => import('@/pages/layout/index.vue'),
    children: [
      {
        path: '',
        meta: {
          title: '主页',
          keepAlive: true,
        },
        components: {
          default: () => import('@/pages/layout/Home.vue'),
          LeftSidebar: () => import('@/pages/layout/LeftSidebar.vue'),
          RightSidebar: () => import('@/pages/layout/RightSidebar.vue'),
        },
      }
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录',
    },
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      title: '面板',
      keepAlive: true,
    },
    component: () => import('@/pages/dashboard/index.vue'),
  },
  {
    path: "/user/:id",
    component: () => import('@/pages/user/index.vue'),
    children: [
      {
        path: 'coupon',
        name: 'UserCoupon',
        component: () => import('@/pages/user/coupon.vue'),
      },
      {
        path: 'profile',
        name: 'UserProfile',
        component: () => import('@/pages/user/profile.vue'),
      }
    ]
  },
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