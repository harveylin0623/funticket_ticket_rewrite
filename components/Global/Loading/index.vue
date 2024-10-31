<template>
  <div
    v-show="commonStore.isLoading"
    class="fixed left-0 top-0 z-[2500] flex h-screen w-full items-center justify-center space-x-1 bg-mask"
  >
    <div
      v-for="count in 3"
      :key="count"
      class="dot size-[23px] scale-0 rounded-full bg-primary-1"
    ></div>
  </div>
</template>

<script setup>
import { useCommonStore } from '@/stores/common.js'
import { useLockBody } from '@/composables/useLockBody.js'

const commonStore = useCommonStore()
const { lockBody } = useLockBody()

watch(() => commonStore.isLoading, (val) => {
  lockBody(val)
})

defineOptions({
  name: 'Loading'
})
</script>

<style lang="scss" scoped>
$animDelay: 0.25s;
.dot {
  animation-name: dotanim;
  animation-duration: 1.5s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @for $i from 0 to 3 {
    &:nth-child(#{$i + 1}) {
      animation-delay: $animDelay * $i;
    }
  }
}

@keyframes dotanim {
  0% { transform: scale(0); }
  50% { transform: scale(1); }
  90% { transform: scale(0); }
  100% { transform: scale(0); }
}
</style>
