<template>
  <BasicStructure
    v-model:isOpen="isOpen"
    :dialog-title="dialogTitle"
    @opened="openedHandler"
  >
    <template v-slot:default>
      <div>
        <p class="mb-4 text-center">{{ dialogContent }}</p>
        <input
          ref="secretInput"
          v-model="ticketSecret"
          type="text"
          placeholder="輸入票券密碼"
          class="form-control"
          :disabled="isRedeeming"
        />
      </div>
    </template>
    <template v-slot:footer>
      <div class="flex items-center border-t border-t-secondary-4">
        <div
          v-if="showCancel"
          :class="[baseButtonClass, buttonWidth, 'border-r border-r-secondary-4']"
          @click="cancelHandler"
        >
          {{ denyText }}
        </div>
        <div
          :class="[baseButtonClass, buttonWidth]"
          @click="redeemHandler"
        >
          {{ verifyText }}
        </div>
      </div>
    </template>
  </BasicStructure>
</template>

<script setup>
import BasicStructure from './BasicStructure.vue'
import { modalProps, modalEmit } from './propsEmitConfig.js'
import { useBasicModal } from '@/composables/useBasicModal.js'

const emit = defineEmits([...modalEmit, 'redeem', 'closed'])
const props = defineProps({
  ...modalProps,
  isRedeeming: {
    type: Boolean,
    default: false
  }
})

const { isOpen, verifyText, denyText, baseButtonClass, buttonWidth, toggleModal } = useBasicModal(props, emit)

const secretInput = ref(null)
const ticketSecret = ref('')

const openedHandler = () => {
  secretInput.value.focus()
}

const redeemHandler = () => {
  if (props.isRedeeming || ticketSecret.value === '') { return }
  emit('redeem', ticketSecret.value)
}

const cancelHandler = () => {
  if (props.isRedeeming) { return }
  toggleModal(false)
}

defineExpose({
  toggleModal
})

defineOptions({
  name: 'InputModal'
})
</script>
