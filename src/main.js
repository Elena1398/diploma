import './assets/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'


createApp(App)
  .use(router)
  .use(autoAnimatePlugin)
  .mount('#app');