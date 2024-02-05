import 'uno.css';

import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupStore } from '@/stores'
import { initAppConfigStore } from '@/logics/initAppConfig';

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app);

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore();



app.use(router)


app.mount('#app')
}

bootstrap()
