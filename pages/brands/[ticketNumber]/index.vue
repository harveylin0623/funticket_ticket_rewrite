<template>
  <div class="min-h-dvh bg-white">
    <BarTitle>適用品牌</BarTitle>
    <div class="grid grid-cols-2 gap-2 p-3">
      <BrandItem
        v-for="(brand,index) in brandList"
        :key="index"
        :brand-info="brand"
      />
    </div>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'
import ticketApi from '@/api/ticketApi.js'
import BrandItem from '@/components/BrandItem/index.vue'

definePageMeta({
  name: 'Brands'
})

const route = useRoute()
const { brandsMeta } = usePageMeta()

const { data: pageData } = await useAsyncData('brand', async () => {
  const ticketInfo = await ticketApi.getTicketInfo({
    data: {
      number: route.params.ticketNumber
    }
  })
  return {
    ticketInfo
  }
})

const brandList = computed(() => pageData.value.ticketInfo.data.brands)

useHead(brandsMeta)
</script>
