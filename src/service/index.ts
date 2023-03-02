import axios_common_instance from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const request = new axios_common_instance({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
export default request
