import { defHttp } from "@/utils/alova";


export interface LoginReq {
  account: string
  password: string
  captcha?: string
  captcha_id?: string
}


export const AuthApi = {
  login: (data: LoginReq) => {
    return defHttp.Post('/v1/auth/login', data, {
      meta: {
        ignoreToken: true
      }
    })
  }
}
