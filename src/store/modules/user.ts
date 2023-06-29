import { defineStore } from 'pinia'
import { reqLogin } from '@/api/user/index'
import type { loginForm } from '@/api/user/type'
const useUserStore = defineStore('User', {
  store: () => {
    return {}
  },

  actions: {
    async userLogin(loginData: loginForm) {
      const login = await reqLogin(loginData)
      console.log('login', login)
    },
  },

  getters: {},
})

export default useUserStore
