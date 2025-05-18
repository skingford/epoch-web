export default {
  path: '/dashboard',
  name: 'Dashboard',
  meta: {
    title: '业务看板',
    keepAlive: true,
    showMenu: true,
    icon: 'Monitor',
  },
  component: () => import('@/pages/dashboard/index.vue'),
}
