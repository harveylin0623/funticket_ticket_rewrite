export const useBasicModal = (props, emit) => {
  const isOpen = ref(false)

  const baseButtonClass = ref('flex h-[40px] shrink-0 grow-0 cursor-pointer items-center justify-center px-1.5 text-modal-button')

  const verifyText = computed(() => props.confirmText === '' ? '確認' : props.confirmText)

  const denyText = computed(() => props.cancelText === '' ? '取消' : props.cancelText)

  const buttonWidth = computed(() => props.showCancel ? 'w-1/2' : 'w-full')

  const toggleModal = (value) => {
    isOpen.value = value
  }

  const cancelHandler = (payload) => {
    toggleModal(false)
    emit('cancel', payload)
  }

  const confirmHandler = (payload) => {
    toggleModal(false)
    emit('confirm', payload)
  }

  return { isOpen, verifyText, denyText, baseButtonClass, buttonWidth, toggleModal, cancelHandler, confirmHandler }
}
