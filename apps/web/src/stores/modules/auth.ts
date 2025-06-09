import { StoreKey } from './consts'
import { LoginReq, AuthApi } from '@/api/auth'

export const useAuthStore = defineStore(StoreKey.auth, {
  state: () => ({
    token: '',
    // userInfo: {} as any,
  }),
  getters: {

  },
  actions: {
    async login(data: LoginReq) {
      const res = await AuthApi.login(data)
      console.log("login.store.res:", res);
    }
  }
})
