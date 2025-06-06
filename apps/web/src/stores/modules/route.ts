import { StoreKey } from './consts';

export const useRouteStore = defineStore(StoreKey.route, {
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
    },
    removeRoute(routeName) {
      this.routes = this.routes.filter(route => route.name !== routeName)
    }
  }
})

// export const routeStore = useRouteStore()
// 解构Pinia store中的响应式状态，同时保持其响应性
// export const useRouteStoreWithOut = storeToRefs(routeStore)