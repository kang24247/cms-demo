import axios_common_instance from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new axios_common_instance({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requsetInterceptor: (config) => {
      return config
    },
    requsetInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
export default request
