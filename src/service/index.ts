import axios_common_instance from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new axios_common_instance({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requsetInterceptor: (config) => {
      console.log('请求成功的拦截')
      return config
    },
    requsetInterceptorCatch: (err) => {
      console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败的拦截')
      return err
    }
  }
})
export default request
