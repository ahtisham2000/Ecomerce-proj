/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import index from "../src/vuex/index"
// Composables

// Plugins
import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'

const app = createApp(App)

registerPlugins(app)
app.use(index)
app.mount('#app')
