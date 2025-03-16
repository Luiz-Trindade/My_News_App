/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

import NProgress from "nprogress";
import "nprogress/nprogress.css"; // Importa o CSS padrão

// Composables
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)

app.config.globalProperties.$nprogress = NProgress;

app.mount('#app')
