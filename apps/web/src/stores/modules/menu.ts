import {StoreKey} from './consts'

export const useMenuStore = defineStore(StoreKey.menu, {
  state: () => ({
    isCollapse:false,
    count:0,
    name:'Eduardo'
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    }
  }
})
