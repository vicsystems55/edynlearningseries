import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

import '@fontsource/baloo-2/400.css'
import '@fontsource/baloo-2/600.css'
import '@fontsource/baloo-2/700.css'

createApp(App)
  .use(router)
  .mount('#app')