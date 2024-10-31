<template>
  <NuxtLoadingIndicator
    color="red"
    :height="2"
    :throttle="0"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const { t } = useI18n()

useHead({
  titleTemplate: `%s | ${t('seo.pageTitle.template')}`
})
</script>
