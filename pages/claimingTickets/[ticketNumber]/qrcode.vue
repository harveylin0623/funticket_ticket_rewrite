<template>
  <div class="h-dvh bg-white">
    qrcode page
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { qrcodeMeta } = usePageMeta()

useHead(qrcodeMeta)
</script>
