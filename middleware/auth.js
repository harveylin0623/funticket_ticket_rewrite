import { useAuthStore } from '@/stores/auth.js'

export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  if (!authStore.isLogin) {
    return navigateTo('/')
  }
})
