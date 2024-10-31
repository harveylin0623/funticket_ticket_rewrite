export const useLockBody = () => {
  const lockBody = (value) => {
    document.body.style.overflow = value ? 'hidden' : ''
  }

  onBeforeUnmount(() => {
    lockBody(false)
  })

  return { lockBody }
}
