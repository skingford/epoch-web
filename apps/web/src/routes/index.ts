import { createWebHashHistory, createRouter } from 'vue-router'
import { layoutRoutes } from './layout'


const defaultRoutes = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录',
  },
  component: () => import('@/pages/login/index.vue'),
}]

const exceptionRoutes = [{
  path: '/404',
  name: 'NotFound',
  meta: {
    title: '404',
  },
  component: () => import('@/pages/exception/404.vue'),
},
{
  path: '/:pathMatch(.*)*',
  redirect: '/404',
}]


const routes = [
  ...defaultRoutes,
  ...layoutRoutes,
  ...exceptionRoutes,
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



