<template>
  <div class="flex h-screen w-full flex-col items-center justify-center space-y-4">
    <p class="text-6xl font-bold">{{ error.statusCode }}</p>
    <div class="text-lg">發生錯誤</div>
    <div class="text-lg font-bold  text-red-500">{{ error.message }}</div>
    <div>page: {{ error.url }}</div>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { errorMeta } = usePageMeta()

defineProps({
  error: {
    type: Object,
    required: true
  }
})

useHead(errorMeta)
</script>
