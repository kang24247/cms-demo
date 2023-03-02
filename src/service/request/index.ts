import axios from 'axios'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

class axios_common_instance {
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default axios_common_instance
