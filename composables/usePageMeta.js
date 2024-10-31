export const usePageMeta = () => {
  const { t } = useI18n()

  const homeMeta = ref({
    title: t('seo.pageTitle.home'),
    meta: [
      { name: 'description', content: '' }
    ]
  })

  return { homeMeta }
}
