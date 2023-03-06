import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AxiosInterceptors {
  requsetInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requsetInterceptorCatch?: (error: any) => any
  responseInterceptor?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface MyRequestConfig extends AxiosRequestConfig {
  interceptors: AxiosInterceptors
}
