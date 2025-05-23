import App from '@/App.vue'
import { apiService } from '@/plugins/axios'
import { registerPlugins } from '@core/utils/plugins'
import mitt from 'mitt'
import { createApp } from 'vue'

// Styles
import '@core/scss/template/index.scss'
import '@coreui/coreui/dist/css/coreui.min.css'
import '@layouts/styles/index.scss'

// Create vue app
export const emitter = mitt()
const app = createApp(App)

// Create event bus
app.config.globalProperties.emitter = emitter

// Add API service as a global property
app.config.globalProperties.$api = apiService

// Register plugins
registerPlugins(app)

// Mount vue app
app.mount('#app')
