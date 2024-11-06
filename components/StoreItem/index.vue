<template>
  <div
    class="my-5 flex items-center justify-between rounded-lg px-3 py-5 shadow-primary"
    @click="reserveHandler"
  >
    <div>
      <p class="text-lg font-bold">{{ storeInfo.name }}</p>
      <p class="mb-1 text-xs text-secondary-1">{{ storeInfo.address }}</p>
      <p class="text-xs text-secondary-1">{{ storeInfo.contact }}</p>
    </div>
    <BaseButton button-type="primary-1">線上預約</BaseButton>
  </div>
</template>

<script setup>
const props = defineProps({
  storeInfo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits('reserve')

const reserveHandler = () => {
  emit('reserve', props.storeInfo.appointment_link)
}

defineOptions({
  name: 'StoreItem'
})
</script>
