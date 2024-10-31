export const useMmrmResponseCode = () => {
  const mmrmResponseCode = ref({
    C01: {
      title: '成功',
      code: 'C01'
    },
    API_ERROR: {
      title: 'API執行錯誤',
      code: 'API_ERROR'
    },
    TOKEN_IS_NOT_EXIST: {
      title: '系統將自動登出會員身份，可能原因包含：登入逾時、在其他裝置重複登入、系統安全性調整等。請您再次登入會員，謝謝您的配合',
      code: 'TOKEN_IS_NOT_EXIST'
    },
    VALIDATION_ERROR: {
      title: '欄位驗證錯誤',
      code: 'VALIDATION_ERROR'
    },
    REQUIRE_TOKEN: {
      title: '會員憑證為必填',
      code: '0x00000002'
    },
    INVALID_TOKEN: {
      title: '會員憑證不存在',
      code: '0x00020007'
    },
    COUPON_ACTIVITY_REDEEM_POINT_NOT_ENOUGH: {
      title: '點數不足，無法兌換票券',
      code: 'COUPON_ACTIVITY_REDEEM_POINT_NOT_ENOUGH'
    },
    COUPON_QUANTITY_IS_NOT_ENOUGH: {
      title: '剩餘票券數量不足',
      code: 'COUPON_QUANTITY_IS_NOT_ENOUGH'
    }
  })

  return { mmrmResponseCode }
}
