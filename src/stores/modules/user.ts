import { defineStore } from 'pinia'
import { loginApi } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
import type { LoginFormData } from '@/api/user/types/login'

export const useUserStore = defineStore('user', () => {
  const token = ref<string>(getToken() || '')

  const login = async (userData: LoginFormData) => {
    const res = await loginApi(userData)
    token.value = res.token
    setToken(res.token)
  }

  return { token, login }
})
