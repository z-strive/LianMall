import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'amfe-flexible'
import 'normalize.css' //css清除默认样式
const app = createApp(App)

app.use(router)

app.mount('#app')
