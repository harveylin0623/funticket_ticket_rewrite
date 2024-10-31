<template>
  <div class="flex h-dvh items-center justify-center">
    <p class="text-6xl font-bold">404</p>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { notFoundMeta } = usePageMeta()

definePageMeta({
  layout: false
})

useHead(notFoundMeta)
</script>
