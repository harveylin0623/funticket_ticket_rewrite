import { baseAxios } from './baseAxios.js'

const ticketApi = {
  getTicketInfo (payload) {
    return baseAxios({
      url: '/portal/ticket',
      method: 'post',
      ...payload
    })
  },
  redeemTicket (payload) {
    return baseAxios({
      url: '/portal/ticket/validate',
      method: 'post',
      ...payload
    })
  }
}

export default ticketApi
