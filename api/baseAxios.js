import { useAxios } from './config.js'

export const baseAxios = (options) => {
  return useAxios({ ...options }).then(res => res.data)
}
