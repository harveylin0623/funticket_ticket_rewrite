<template>
  <div class="min-h-dvh bg-white">
    <BarTitle>品牌詳情</BarTitle>
    <div class="p-5">
      <div class="mb-3 md:h-[500px]">
        <img
          :src="brandImage"
          class="h-auto w-full object-cover md:size-full"
          :alt="brandName"
        />
      </div>
      <p>{{ brandName }}</p>
      <div class=" space-y-5">
        <StoreItem
          v-for="store,index in storeList"
          :key="index"
          :store-info="store"
          @reserve="reserveHandler"
        />
      </div>
      <div class="whitespace-pre-line text-sm text-secondary-1">{{ brandDesc }}</div>
    </div>
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'
import { useGaEvent } from '@/composables/useGaEvent.js'
import StoreItem from '@/components/StoreItem/index.vue'
import ticketApi from '@/api/ticketApi.js'

const route = useRoute()
const { brandsDetailMeta } = usePageMeta()
const { emitGaEvent, page_location, page_title } = useGaEvent()

const { data: pageData } = await useAsyncData('brandDetail', async () => {
  const ticketInfo = await ticketApi.getTicketInfo({
    data: {
      number: route.params.ticketNumber
    }
  })
  return {
    ticketInfo
  }
})

const hasBrand = computed(() => pageData.value.ticketInfo.data.brands.length > 0)

const brandImage = computed(() => hasBrand.value ? pageData.value.ticketInfo.data.brands[0].image_path : '')

const brandName = computed(() => hasBrand.value ? pageData.value.ticketInfo.data.brands[0].name : '')

const storeList = computed(() => hasBrand.value ? pageData.value.ticketInfo.data.brands[0].stores : [])

const brandDesc = computed(() => hasBrand.value ? pageData.value.ticketInfo.data.brands[0].description : '')

const reserveHandler = (link) => {
  emitGaEvent({
    eventName: 'reservation_click',
    pageParams: {
      button_name: '線上預約',
      brand_name: brandName.value
    },
    ticketInfo: pageData.value.ticketInfo.data,
    deleteList: [page_location, page_title]
  })
  window.open(link)
}

onMounted(() => {
  emitGaEvent({
    eventName: 'page_view',
    pageParams: {
      brand_name: brandName.value
    },
    ticketInfo: pageData.value.ticketInfo.data,
    deleteList: [],
    pageTitle: '品牌詳情頁'
  })
})

definePageMeta({
  name: 'BrandDetail'
})

defineOptions({
  name: 'BrandDetail'
})

useHead(brandsDetailMeta)
</script>
