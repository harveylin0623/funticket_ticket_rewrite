import axios from 'axios'

export const useAxios = (options) => {
  const customAxios = axios.create({
    baseURL: `${process.env.BASE_API_URL}/api`,
    headers: {

    }
  })

  customAxios.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  customAxios.interceptors.response.use(function (response) {
    return response
  }, function (error) {
    return Promise.reject(error)
  })

  return customAxios({ ...options })
}
