import _ from 'lodash'

export const useGaEvent = () => {
  const { gtag } = useGtag()
  const ticket_id = 'ticket_id'
  const ticket_title = 'ticket_title'
  const ticket_status = 'ticket_status'
  const page_location = 'page_location'
  const page_title = 'page_title'

  const ticketStatusMapping = {
    1: 'unclaimed',
    2: 'claimed',
    3: 'invalid',
    4: 'expired'
  }

  const getRequiredEventParams = (ticketInfo, deleteList, pageTitle) => {
    if (_.isEmpty(ticketInfo)) { return {} }

    const commonParams = {
      [ticket_id]: ticketInfo.number,
      [ticket_title]: ticketInfo.ticket_name,
      [ticket_status]: ticketStatusMapping[ticketInfo.issue_status],
      [page_location]: window.location.href,
      [page_title]: pageTitle || ''
    }

    deleteList.forEach((item) => {
      delete commonParams[item]
    })

    return commonParams
  }

  const emitGaEvent = ({ eventName, pageParams, ticketInfo, deleteList, pageTitle }) => {
    const requiredParams = getRequiredEventParams(ticketInfo, deleteList, pageTitle)
    console.log({ ...requiredParams, ...pageParams })
    gtag('event', eventName, {
      ...requiredParams,
      ...pageParams
    })
  }

  return { ticket_id, ticket_title, ticket_status, page_location, page_title, emitGaEvent }
}
