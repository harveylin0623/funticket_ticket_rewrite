<template>
  <div id="default-layout">
    <CustomContainer>
      <slot></slot>
    </CustomContainer>
  </div>
</template>

<script setup>

const changeHtmlbgColor = (key) => {
  const styleObj = window.getComputedStyle(document.documentElement)
  document.body.style.backgroundColor = styleObj.getPropertyValue(key)
}

onBeforeMount(() => {
  changeHtmlbgColor('--main-bg-color')
})

onBeforeUnmount(() => {
  changeHtmlbgColor('--default-bg-color')
})
</script>
