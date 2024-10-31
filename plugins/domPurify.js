import VueDOMPurifyHTML from 'vue-dompurify-html'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueDOMPurifyHTML, {
    default: {
      ADD_ATTR: ['target']
    }
  })
})
