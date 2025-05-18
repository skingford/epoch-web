export default {
  path: '/system',
  meta: {
    title: '系统管理',
    showMenu: true,
    icon: 'setting',
  },
  redirect: '/system/profile',
  component: () => import('@/pages/system/index.vue'),
  children: [
    {
      path: 'profile',
      meta: {
        title: '个人中心',
      },
      component: () => import('@/pages/system/profile.vue'),
    },
    {
      path: 'setting',
      meta: {
        title: '系统配置',
      },
      component: () => import('@/pages/system/setting.vue'),
    },
  ],
}

