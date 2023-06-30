import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
import { SET_TOKEN, GET_TOKEN } from '../../utils/token'
const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },

  actions: {
    async userLogin(loginData: loginForm) {
      const res: loginResponseData = await reqLogin(loginData)
      if (res.code === 200) {
        this.token = res.data.token
        // localStorage.setItem('token', )
        SET_TOKEN(res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },

  getters: {},
})

export default useUserStore
