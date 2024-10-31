<template>
  <div>
    <div class="h-auto md:h-[576px]">
      <img
        :src="ticketImage"
        alt=""
        class="h-auto w-full object-cover md:h-full"
      />
    </div>
    <div class="bg-white px-6 pb-[70px] pt-6">
      <div>
        <p class="mb-2.5">{{ ticketName }}</p>
        <p class="mb-1 text-sm text-secondary-1">發放時間：{{ releasePeriod }}</p>
        <p class="text-sm text-secondary-1">使用期限：{{ usePeriod }}</p>
      </div>
      <div class="my-6 border-y border-y-primary-3 py-6">
        <p class="mb-2.5">活動事項</p>
        <div class="whitespace-pre-line text-sm text-secondary-2">{{ activityDesc }}</div>
      </div>
      <div>
        <p class="mb-2.5">注意事項</p>
        <div class="whitespace-pre-line text-sm text-secondary-2">{{ noticeText }}</div>
      </div>
    </div>
    <TicketStatusBar />
  </div>
</template>

<script setup>
import { useRedeemResult } from '@/composables/useRedeemResult.js'
import ticketApi from '@/api/ticketApi.js'
import TicketStatusBar from '@/components/TicketStatusBar/index.vue'

const route = useRoute()
const { redeemResult } = useRedeemResult()

const { data: pageData } = useAsyncData('ticketInfo', async () => {
  const ticketInfo = await ticketApi.getTicketInfo({
    data: {
      number: route.params.ticketNumber
    }
  })
  return {
    ticketInfo
  }
})

const ticketIsExist = computed(() => pageData.value.ticketInfo.status_code !== redeemResult.value.notExist.statusCode)

const ticketImage = computed(() => {
  let imgUrl = ''
  if (ticketIsExist.value) {
    imgUrl = pageData.value.ticketInfo.data.image_path
  }
  return imgUrl
})

const ticketName = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.ticket_name : '')

const releasePeriod = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.release_period : '')

const usePeriod = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.use_period : '')

const activityDesc = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.description : '')

const noticeText = computed(() => {
  return ticketIsExist.value ? pageData.value.ticketInfo.data.note : ''
})

onMounted(() => {
  console.log(pageData)
})

</script>
