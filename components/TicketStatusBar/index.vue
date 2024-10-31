<template>
  <div class="fixed bottom-0 left-0 w-full">
    <CustomContainer>
      <div class="flex items-center justify-between bg-white p-3">
        <BaseButton class="w-[49.5%]">查看適用品牌</BaseButton>
        <BaseButton class="w-[49.5%]">開啟票券條碼</BaseButton>
      </div>
    </CustomContainer>
  </div>
</template>

<script setup>
defineOptions({
  name: 'TicketStatusBar'
})
</script>
