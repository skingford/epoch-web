function getModulesRoutes() {
  const modules = import.meta.glob<{ default: any }>('./modules/*.ts', { eager: true })
  return Object.values(modules).map(module => module.default)
}

const modulesRoutes = getModulesRoutes()


const layoutRoutes = [
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    redirect: '/dashboard',
    children: [
      ...modulesRoutes
    ]
  }
]

export default layoutRoutes