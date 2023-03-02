import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerApp } from './global'
import request from './service'
const app = createApp(App)

request.request({
  url: '/home',
  method: 'get'
})

registerApp(app)
app.use(store).use(router).mount('#app')

console.log(process.env)
