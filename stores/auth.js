import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authToken = useCookie('authToken', {
    maxAge: 30 * 24 * 60 * 60
  })

  const isLogin = computed(() => {
    return authToken.value !== undefined
  })

  return { authToken, isLogin }
})
