import dayjs from 'dayjs'
import { useAxios } from './config.js'
import { useAuthStore } from '@/stores/auth.js'
import { useCrypto } from '@/composables/useCrypto.js'

export const baseAxios = (options) => {
  const authStore = useAuthStore()
  const { encodeSign } = useCrypto()
  const { data, ...other } = options
  const requestSchema = {
    member_access_token: authStore.getAuthCookie() || '',
    request_parameter: {
      ...data
    },
    timestamp: dayjs().format('YYYY/MM/DD HH:mm:ss')
  }
  const sign = encodeSign(requestSchema)

  return useAxios({ ...other, data: { sign } }).then(res => res.data)
}
