<template>
  <div class="fixed bottom-0 left-0 w-full">
    <CustomContainer v-if="showAllButton">
      <div
        v-if="showMainButton"
        class="flex items-center justify-between bg-white px-6 py-3"
      >
        <BaseButton
          class="w-[49.5%]"
          @click="goToBrandPage"
        >
          查看適用品牌
        </BaseButton>
        <BaseButton
          class="w-[49.5%]"
          @click="doAction"
        >
          {{ rightButtonText }}
        </BaseButton>
      </div>
      <div
        v-if="isExpired"
        class="bg-white px-6 py-3"
      >
        <BaseButton
          button-type="secondary-3"
          class="w-full cursor-not-allowed"
        >
          {{ mappingIssueStatus['4'] }}
        </BaseButton>
      </div>
    </CustomContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  issueStatus: {
    type: Number,
    required: true
  },
  usedStatus: {
    type: Number,
    required: true
  },
  toggleInputModal: {
    type: Function,
    required: true
  },
  showUseExpire: {
    type: Function,
    required: true
  },
  gaEmitQrocdeEvent: {
    type: Function,
    required: true
  },
  gaEmitBrandEvent: {
    type: Function,
    required: true
  }
})

const route = useRoute()
const router = useRouter()

const mappingIssueStatus = ref({
  1: '領取票券',
  2: '開啟票券條碼',
  3: '',
  4: '已超過發放時間'
})

const rightButtonText = computed(() => mappingIssueStatus.value[props.issueStatus] || '')

const showMainButton = computed(() => props.issueStatus === 1 || props.issueStatus === 2)

const showAllButton = computed(() => props.issueStatus !== 3)

const isExpired = computed(() => props.issueStatus === 4)

const doAction = () => {
  if (props.issueStatus === 1) {
    props.toggleInputModal(true, true)
  } else if (props.issueStatus === 2) {
    if (props.usedStatus === 3) {
      props.showUseExpire()
      props.gaEmitQrocdeEvent()
      return
    }
    props.gaEmitQrocdeEvent()
    router.push({
      name: 'Qrcode',
      params: {
        ticketNumber: route.params.ticketNumber
      }
    })
  }
}

const goToBrandPage = () => {
  props.gaEmitBrandEvent()
  router.push({
    name: 'Brands',
    params: {
      ticketNumber: route.params.ticketNumber
    }
  })
}

defineOptions({
  name: 'TicketStatusBar'
})
</script>
