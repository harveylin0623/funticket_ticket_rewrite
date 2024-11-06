<template>
  <div class="basic-content">
    <BarTitle>{{ pageData.ticketInfo.data.ticket_name }}</BarTitle>
    <div class="p-5">
      <p class="mb-5 text-center text-sm">請於適用品牌門市出示條碼</p>
      <div class="flex items-center justify-center px-5 py-[60px] shadow-primary">
        <div class="w-[160px]">
          <div class="mb-4">
            <canvas ref="qrcodeCanvas"></canvas>
          </div>
          <div class="space-y-1">
            <div
              v-for="(info,index) in infoList"
              :key="index"
              class="mb-1.5 flex items-center justify-between text-[13px]"
            >
              <p>{{ info.title }}</p>
              <p>{{ info.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import QRious from 'qrious'
import { usePageMeta } from '@/composables/usePageMeta.js'
import { useGaEvent } from '@/composables/useGaEvent.js'
import ticketApi from '@/api/ticketApi'

const route = useRoute()
const { qrcodeMeta } = usePageMeta()
const { ticket_status, emitGaEvent } = useGaEvent()
const qrcodeCanvas = ref(null)
const infoList = ref([
  {
    title: '票券序號',
    value: ''
  },
  {
    title: '檢查碼',
    value: ''
  }
])

const { data: pageData } = await useAsyncData('qrcode', async () => {
  const ticketInfo = await ticketApi.getTicketInfo({
    data: {
      number: route.params.ticketNumber
    }
  })
  return {
    ticketInfo
  }
})

const createQrcode = () => {
  const { number, code } = pageData.value.ticketInfo.data
  new QRious({
    element: qrcodeCanvas.value,
    value: `${number}${code}`,
    size: 160
  })
}

const setInfoList = () => {
  infoList.value[0].value = pageData.value.ticketInfo.data.number
  infoList.value[1].value = pageData.value.ticketInfo.data.code
}

onMounted(() => {
  createQrcode()
  setInfoList()
  if (pageData.value.ticketInfo.data !== null) {
    emitGaEvent({
      eventName: 'page_view',
      pageParams: {},
      ticketInfo: pageData.value.ticketInfo.data,
      deleteList: [ticket_status],
      pageTitle: '條碼頁面'
    })
  }
})

definePageMeta({
  name: 'Qrcode'
})

useHead(qrcodeMeta)
</script>
