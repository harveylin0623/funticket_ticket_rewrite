<template>
  <div class="w-full h-screen flex items-center justify-center flex-col space-y-4">
    <p class="text-4xl font-bold">{{ error.statusCode }}</p>
    <div class="text-lg">發生錯誤</div>
    <div class="text-lg text-red-600">{{ error.message }}</div>
    <div>page: {{ error.url }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { 
    type: Object, 
    required: true 
  }
})

const handleError = () => clearError({ redirect: '/' })
</script>
