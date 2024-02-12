import 'uno.css';

import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import { setupStore } from '@/stores'
import { initAppConfigStore } from '@/logics/initAppConfig';
import { setupI18n } from '@/locales/setupI18n';
import { router, setupRouter } from '@/router';
import { setupRouterGuard } from '@/router/guard';

async function bootstrap() {
  const app = createApp(App)

  // Configure store
  // 配置 store
  setupStore(app);

  // Initialize internal system configuration
  // 初始化内部系统配置
  initAppConfigStore();


  // Multilingual configuration
  // 多语言配置
  // Asynchronous case: language files may be obtained from the server side
  // 异步案例：语言文件可能从服务器端获取
  await setupI18n(app);


  // Configure routing
  // 配置路由
  setupRouter(app);


  // router-guard
  // 路由守卫
  setupRouterGuard(router);


  app.mount('#app')
}

bootstrap()
