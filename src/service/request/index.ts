import axios from 'axios'
import {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios'

interface axiosInterceptors {
  requsetInterceptor?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig
  requsetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface requestInterceptors extends AxiosRequestConfig {
  interceptors: axiosInterceptors
}

class axios_common_instance {
  instance: AxiosInstance
  interceptors?: axiosInterceptors

  constructor(config: requestInterceptors) {
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
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      // console.log(res)
    })
  }
}

export default axios_common_instance
