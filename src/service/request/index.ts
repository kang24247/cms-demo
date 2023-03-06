import axios from 'axios'
import { AxiosInstance } from 'axios'
import { AxiosInterceptors, MyRequestConfig } from './type'

class axios_common_instance {
  instance: AxiosInstance
  interceptors?: AxiosInterceptors

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.instance.interceptors.request.use(
      this.interceptors?.requsetInterceptor,
      this.interceptors?.requsetInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: MyRequestConfig): void {
    if (config.interceptors?.requsetInterceptor) {
      config = config.interceptors.requsetInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default axios_common_instance
