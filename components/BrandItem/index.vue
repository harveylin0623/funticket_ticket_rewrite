<template>
  <div
    class="cursor-pointer rounded-lg px-1 pb-2 pt-1 shadow-primary"
    @click="goToDetail"
  >
    <img
      :src="brandInfo.image_path"
      class="h-auto w-full"
      :alt="brandInfo.name"
    />
    <p class="text-center text-sm">{{ brandInfo.name }}</p>
  </div>
</template>

<script setup>
defineProps({
  brandInfo: {
    type: Object,
    required: true
  }
})

const route = useRoute()
const router = useRouter()

const goToDetail = () => {
  router.push({
    name: 'BrandDetail',
    params: {
      ticketNumber: route.params.ticketNumber
    }
  })
}

defineOptions({
  name: 'BrandItem'
})
</script>
