export const layoutRoutes = [
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    redirect: '/manager',
    children: [
      {
        path: 'manager',
        component: () => import('@/pages/manager/index.vue'),
      },
      {
        path: '/dashboard',
        name: 'Dashboard',
        meta: {
          title: '面板',
          keepAlive: true,
        },
        component: () => import('@/pages/dashboard/index.vue'),
        children: [
          {
            path: '',
            components: {
              default: () => import('@/pages/dashboard/Main.vue'),
              DashboardLeft: () => import('@/pages/dashboard/Left.vue'),
              DashboardRight: () => import('@/pages/dashboard/Right.vue'),
            },
          }
        ]
      },
    ]
  }
]