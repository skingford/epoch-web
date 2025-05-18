export default {
  path: 'manager',
  meta: {
    title: '管理员',
    keepAlive: true,
    showMenu: true,
    icon: 'User',
  },
  component: () => import('@/pages/manager/index.vue'),
}

