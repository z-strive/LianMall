import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import 'normalize.css' //css清除默认样式
import 'vant/lib/index.css';// 引入vant的全局样式
const app = createApp(App)

app.use(router)

app.mount('#app')
