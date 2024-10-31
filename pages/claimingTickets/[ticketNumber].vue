<template>
  <div>
    <div class="h-auto md:h-[576px]">
      <img
        src="http://funticket-api-uat.wisho2o.com/storage/images/20241015144414_670e0f3e8299a_320_240.png"
        alt=""
        class="h-auto w-full object-cover md:h-full"
      />
    </div>
    <div class="mb-[62px] bg-white px-6 pt-6">
      <div>
        <p class="mb-2.5">野椿241015測試券</p>
        <p class="mb-1 text-sm text-secondary-1">發放時間：2024/10/15 ~ 2024/10/17</p>
        <p class="text-sm text-secondary-1">使用期限：2024/12/31</p>
      </div>
      <div class="my-6 border-y border-y-primary-3 py-6">
        <p class="mb-2.5">活動事項</p>
        <div class="whitespace-pre-line text-sm text-secondary-2">
          ✦ 本券可 1 人於 FunTicket 通用店家名單擇一使用，且不限品項 ( 已特價品項不可抵用 )。
          ✦ 本券平假日皆適用，預約時段請依店家公告時間為主，預約時請告知使用本券及內容。
          ✦ 本券不得指定服務人員。
          ✦ 本券不得轉售、兌換現金、分次折抵、找零或折換其他贈品，也不可抵扣其他費用。
          ✦ 本券 ( 含序號 ) 僅限單次使用，一經使用無法恢復。
          ✦ 僅適用於該活動期間，逾期無效，領取後 1 年內有效。
          ✦ 本券恕不與其他票券、優惠、行銷活動合併使用。
          ✦ 本券有效與否，以發行商票券系統所記錄之狀態為憑。如系統因網路連線有所遲延，依兌換商家系統端資訊為準。
          ✦ 使用本券為非發票交易，所折抵消費之金額不予開立統一發票，惟如有其他特殊情況，將依相關法令或規範辦理。
          ✦ 本券為無償發行之商品貨價抵用券，不適用商品 ( 服務 ) 禮券記載之規範。
          ✦ 本券保留適用店家名單調整及變更贈送辦法及折抵方式的權利，如有變動請以＂優惠感商城股份有限公司＂公告為主。
          ✦ 票券選購完成後至會員中心點選我的票券，預約流程會在開啟票券的同時，顯示查看適用品牌，消費者可點選適用品牌
          後跳轉至選用店家的官方帳號進行預約。
        </div>
      </div>
      <div>
        <p class="mb-2.5">活動事項</p>
        <div class="whitespace-pre-line text-sm text-secondary-2">
          ✦ 多店聯合通用券服務項目如：美容、美髮、頭皮護理、美甲、美睫、紋繡、美體、除毛、舒壓按摩。
          ✦ 可於選購的類別，於通用店家名單內擇一預約使用。
          ✦ 有效日期於領券日起開始計算使用期限 ( 領取日起算第一天 ) 180 天內有效，逾期無效。
        </div>
      </div>
    </div>
    <TicketStatusBar />
  </div>
</template>

<script setup>
import TicketStatusBar from '@/components/TicketStatusBar/index.vue'
</script>

<style lang="scss" scoped>

</style>
