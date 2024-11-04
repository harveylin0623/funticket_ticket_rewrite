export const usePageMeta = () => {
  const { t } = useI18n()

  const homeMeta = ref({
    title: t('seo.pageTitle.home'),
    meta: [
      { name: 'description', content: '' }
    ]
  })

  const ticketMeta = ref({
    title: '票券頁面',
    meta: [
      { name: 'description', content: '' }
    ]
  })

  const qrcodeMeta = ref({
    title: '條碼頁面',
    meta: [
      { name: 'description', content: '' }
    ]
  })

  const notFoundMeta = ref({
    title: '404'
  })

  const errorMeta = ref({
    title: '500 error'
  })

  return { homeMeta, ticketMeta, qrcodeMeta, notFoundMeta, errorMeta }
}
