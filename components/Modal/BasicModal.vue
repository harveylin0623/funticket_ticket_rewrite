<template>
  <BasicStructure
    v-model:isOpen="isOpen"
    :dialog-title="dialogTitle"
  >
    <template v-slot:default>
      <div class="text-center">{{ dialogContent }}</div>
    </template>
    <template v-slot:footer>
      <div
        class="flex items-center"
        :class="[buttonAlign]"
      >
        <button
          v-if="showCancel"
          class="btn btn-outline-primary w-[49%] shrink-0 grow-0"
          @click="cancelHandler"
        >
          {{ denyText }}
        </button>
        <button
          class="btn btn-primary w-[49%] shrink-0 grow-0"
          @click="confirmHandler"
        >
          {{ verifyText }}
        </button>
      </div>
    </template>
  </BasicStructure>
</template>

<script setup>
import BasicStructure from './BasicStructure.vue'
import { modalProps, modalEmit } from './propsEmitConfig.js'
import { useBasicModal } from '@/composables/useBasicModal.js'

const emit = defineEmits(modalEmit)
const props = defineProps(modalProps)

const { isOpen, verifyText, denyText, buttonAlign, toggleModal, cancelHandler, confirmHandler } = useBasicModal(props, emit)

defineExpose({
  toggleModal
})

defineOptions({
  name: 'BasicModal'
})
</script>
