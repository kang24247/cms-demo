import axios from 'axios'
import { AxiosInstance, AxiosRequestHeaders } from 'axios'
import { MyAxiosInterceptors, MyRequestConfig } from './type'

class axios_common_instance {
  instance: AxiosInstance
  interceptors?: MyAxiosInterceptors
  // headers: AxiosRequestHeaders

  constructor(config: MyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // this.headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
    //实例拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requsetInterceptor,
      this.interceptors?.requsetInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //全局拦截器
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

  //自定义拦截器
  request(config: MyRequestConfig): void {
    if (config.interceptors?.requsetInterceptor) {
      config = config.interceptors.requsetInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      console.log(config)
    })
  }
}

export default axios_common_instance
