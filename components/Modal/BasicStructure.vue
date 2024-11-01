<template>
  <ClientOnly>
    <el-dialog
      v-model="dialogVisible"
      :align-center="true"
      :show-close="false"
      :close-on-click-modal="false"
      class="basic-structure"
    >
      <template v-slot:header>
        <div class="text-center text-lg">{{ dialogTitle }}</div>
      </template>
      <slot name="default"></slot>
      <template
        v-if="slots.footer"
        v-slot:footer
      >
        <slot name="footer"></slot>
      </template>
    </el-dialog>
  </ClientOnly>
</template>

<script setup>
const slots = useSlots()
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  },
  dialogTitle: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:isOpen'])

const dialogVisible = computed({
  get () {
    return props.isOpen
  },
  set (val) {
    emit('update:isOpen', val)
  }
})

defineOptions({
  name: 'BasicStructure'
})

</script>
