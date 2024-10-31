<template>
  <button :class="[baseButtonClass]">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  buttonType: {
    type: String,
    default: 'primary-1'
  }
})

const baseButtonClass = computed(() => {
  const mapping = {
    'primary-1': 'btn-primary-1',
    'secondary-3': 'btn-secondary-3'
  }
  return `btn ${mapping[props.buttonType]}`
})

defineOptions({
  name: 'BaseButton'
})
</script>
