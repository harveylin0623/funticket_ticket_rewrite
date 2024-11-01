<template>
  <BasicStructure
    v-model:isOpen="isOpen"
    :dialog-title="dialogTitle"
  >
    <template v-slot:default>
      <div class="text-center">{{ dialogContent }}</div>
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
          @click="confirmHandler"
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

const emit = defineEmits(modalEmit)
const props = defineProps(modalProps)

const { isOpen, verifyText, denyText, baseButtonClass, buttonWidth, toggleModal, cancelHandler, confirmHandler } = useBasicModal(props, emit)

defineExpose({
  toggleModal
})

defineOptions({
  name: 'BasicModal'
})
</script>
