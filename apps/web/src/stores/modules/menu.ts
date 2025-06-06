export const useRouteStore = defineStore('menu-store', {
  state: () => ({
    routes: [] as any[],
    historyRoutes: [] as any[]
  }),
  getters: {
    doubleCount: (state) => state.routes.length * 2,
  },
  actions: {
    addRoute(route) {
      this.routes.push(route)
    }
  }
})