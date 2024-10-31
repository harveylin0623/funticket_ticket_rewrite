export const useRedeemResult = () => {
  const redeemResult = ref({
    notExist: {
      msg: '票券不存在',
      statusCode: '0x00070001'
    },
    inValid: {
      msg: '票券已失效',
      statusCode: '0x00070003'
    },
    expired: {
      msg: '票券已逾期',
      statusCode: '0x00070005'
    },
    passwordError: {
      msg: '密碼錯誤，請重新輸入',
      statusCode: '0x00070006'
    },
    notStart: {
      msg: '請注意，目前尚未開放票劵領取。請耐心等待，並於發放期間內領取票劵。',
      statusCode: '0x00070008'
    },
    redeemFail: {
      msg: '領取失敗。請稍後再試，或聯絡客服以取得協助。',
      statusCode: '0x00070009'
    }
  })

  return { redeemResult }
}
