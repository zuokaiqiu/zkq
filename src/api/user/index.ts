import request from '@/utils/request'
import type { loginForm, loginResponseData, useResponseData } from './type'
enum API {
  loginUrl = '/user/login',
  userInfoUrl = '/user/info',
}

export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.loginUrl, data)
}

export const reqUserInfo = () => {
  return request.get<any, useResponseData>(API.userInfoUrl)
}
