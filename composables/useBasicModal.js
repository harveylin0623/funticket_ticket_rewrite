export const useBasicModal = (props, emit) => {
  const { t } = useI18n()
  const isOpen = ref(false)

  const verifyText = computed(() => props.confirmText === '' ? t('confirm') : props.confirmText)

  const denyText = computed(() => props.cancelText === '' ? t('cancel') : props.cancelText)

  const buttonAlign = computed(() => props.showCancel ? 'justify-between' : 'justify-center')

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

  return { isOpen, verifyText, denyText, buttonAlign, toggleModal, cancelHandler, confirmHandler }
}
