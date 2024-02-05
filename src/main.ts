import 'uno.css';

import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupStore } from '@/stores'

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app);



app.use(router)


app.mount('#app')
}

bootstrap()
