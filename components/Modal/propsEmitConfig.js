export const modalProps = {
  dialogTitle: {
    type: String,
    default: ''
  },
  dialogContent: {
    type: String,
    default: ''
  },
  showCancel: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: ''
  },
  cancelText: {
    type: String,
    default: ''
  }
}

export const modalEmit = ['confirm', 'cancel']
