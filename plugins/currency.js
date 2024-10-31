import { formatDollar } from '@/utilities/formatDollar.js'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('currency', {
    updated (el, binding) {
      el.textContent = formatDollar(binding.value)
    },
    mounted (el, binding) {
      el.textContent = formatDollar(binding.value)
    }
  })
})
