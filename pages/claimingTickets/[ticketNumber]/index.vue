<template>
  <div class="basic-content">
    <div>
      <img
        :src="ticketImage"
        class="h-auto w-full object-cover"
        alt=""
      />
    </div>
    <div class="px-6 pb-[70px] pt-6">
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
    <TicketStatusBar
      :issue-status="pageData.ticketInfo.data.issue_status"
      :used-status="pageData.ticketInfo.data.used_status"
      :toggle-input-modal="toggleInputModal"
      :show-use-expire="showUseExpire"
      :ga-emit-qrocde-event="gaEmitQrocdeEvent"
      :ga-emit-brand-event="gaEmitBrandEvent"
    />
    <BasicModal
      ref="basicModal"
      dialog-title="提示"
      :dialog-content="basicModalContent"
    />
    <InputModal
      ref="inputModal"
      dialog-title="請輸入票券密碼"
      :dialog-content="usePeriod"
      :show-cancel="true"
      :is-redeeming="isRedeeming"
      @redeem="redeemHandler"
    />
  </div>
</template>

<script setup>
import { usePageMeta } from '@/composables/usePageMeta.js'
import { useRedeemResult } from '@/composables/useRedeemResult.js'
import { useGaEvent } from '@/composables/useGaEvent.js'
import ticketApi from '@/api/ticketApi.js'
import TicketStatusBar from '@/components/TicketStatusBar/index.vue'
import BasicModal from '@/components/Modal/BasicModal.vue'
import InputModal from '@/components/Modal/InputModal.vue'

const route = useRoute()
const router = useRouter()
const { ticketMeta } = usePageMeta()
const { redeemResult } = useRedeemResult()
const { ticket_status, page_location, page_title, emitGaEvent } = useGaEvent()
const basicModal = ref(null)
const inputModal = ref(null)
const isRedeeming = ref(false)
const basicModalContent = ref('')

const { data: pageData } = await useAsyncData('ticketInfo', async () => {
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

const noticeText = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.note : '')

const toggleInputModal = (isShow, needGaEvent = false) => {
  inputModal.value.toggleModal(isShow)
  if (needGaEvent) {
    emitGaEvent({
      eventName: 'button_click',
      pageParams: {
        button_name: '領取票券'
      },
      ticketInfo: pageData.value.ticketInfo.data,
      deleteList: [ticket_status, page_location, page_title]
    })
  }
}

const showUseExpire = () => {
  basicModalContent.value = `此票券已於${usePeriod.value}過期`
  basicModal.value.toggleModal(true)
}

const gaEmitQrocdeEvent = () => {
  emitGaEvent({
    eventName: 'button_click',
    pageParams: {
      button_name: '開啟票券條碼'
    },
    ticketInfo: pageData.value.ticketInfo.data,
    deleteList: [ticket_status, page_location, page_title]
  })
}

const gaEmitBrandEvent = () => {
  emitGaEvent({
    eventName: 'button_click',
    pageParams: {
      destination: '適用品牌列表頁面',
      button_name: '查看適用品牌'
    },
    ticketInfo: pageData.value.ticketInfo.data,
    deleteList: [page_location, page_title]
  })
}

const redeemHandler = async (ticketSecret) => {
  isRedeeming.value = true
  const { data, message, status_code } = await ticketApi.redeemTicket({
    data: {
      number: pageData.value.ticketInfo.data.number,
      code: ticketSecret
    }
  })
  if (data === null) {
    basicModalContent.value = message
    toggleInputModal(false)
    basicModal.value.toggleModal(true)
    isRedeeming.value = false
    if (status_code === redeemResult.value.passwordError.statusCode) {
      emitGaEvent({
        eventName: 'password_input',
        pageParams: {
          input_result: 'incorrect'
        },
        ticketInfo: pageData.value.ticketInfo.data,
        deleteList: [ticket_status, page_location, page_title]
      })
    }
    return
  }
  emitGaEvent({
    eventName: 'password_input',
    pageParams: {
      input_result: 'correct'
    },
    ticketInfo,
    deleteList: [ticket_status, page_location, page_title]
  })
  router.push({
    name: 'Qrcode',
    params: {
      ticketNumber: pageData.value.ticketInfo.data.number
    }
  })
  isRedeeming.value = false
}

onMounted(() => {
  console.log(pageData)
  emitGaEvent({
    eventName: 'page_view',
    pageParams: {},
    ticketInfo: pageData.value.ticketInfo.data,
    deleteList: [],
    pageTitle: '票券頁面'
  })
})

useHead(ticketMeta)

</script>
