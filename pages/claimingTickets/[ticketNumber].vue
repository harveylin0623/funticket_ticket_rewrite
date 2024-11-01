<template>
  <div>
    <div>
      <img
        :src="ticketImage"
        class="h-auto w-full object-cover"
        alt=""
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
    <TicketStatusBar
      :issue-status="pageData.ticketInfo.data.issue_status"
      :used-status="pageData.ticketInfo.data.used_status"
      :toggle-input-modal="toggleInputModal"
    />
    <BasicModal
      ref="basicModal"
      dialog-title="提示"
      :dialog-content="redeemErrorMessage"
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
import { useRedeemResult } from '@/composables/useRedeemResult.js'
import { usePageMeta } from '@/composables/usePageMeta.js'
import ticketApi from '@/api/ticketApi.js'
import TicketStatusBar from '@/components/TicketStatusBar/index.vue'
import BasicModal from '@/components/Modal/BasicModal.vue'
import InputModal from '@/components/Modal/InputModal.vue'

const route = useRoute()
const router = useRouter()
const { redeemResult } = useRedeemResult()
const { ticketMeta } = usePageMeta()
const basicModal = ref(null)
const inputModal = ref(null)
const isRedeeming = ref(false)
const redeemErrorMessage = ref('')

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

const noticeText = computed(() => ticketIsExist.value ? pageData.value.ticketInfo.data.note : '')

const toggleInputModal = (val) => {
  inputModal.value.toggleModal(val)
}

const redeemHandler = async (ticketSecret) => {
  isRedeeming.value = true
  const { data, message } = await ticketApi.redeemTicket({
    data: {
      number: pageData.value.ticketInfo.data.number,
      code: ticketSecret
    }
  })
  if (data === null) {
    redeemErrorMessage.value = message
    toggleInputModal(false)
    basicModal.value.toggleModal(true)
    isRedeeming.value = false
    return
  }
  router.push('/')
  isRedeeming.value = false
}

onMounted(() => {
  console.log(pageData)
})

useHead(ticketMeta)

</script>
