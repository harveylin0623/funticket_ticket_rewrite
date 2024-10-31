<template>
  <div>
    csdcsdcsd
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { homeMeta } = usePageMeta()

definePageMeta({
  layout: false
})

useHead(homeMeta)
</script>
