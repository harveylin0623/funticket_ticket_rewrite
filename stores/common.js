import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const isLoading = ref(false)

  const setLoading = (value) => {
    isLoading.value = value
  }

  return { isLoading, setLoading }
})
