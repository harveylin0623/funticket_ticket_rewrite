<template>
  <div>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'

const { homeMeta } = usePageMeta()

useHead(homeMeta)

</script>
