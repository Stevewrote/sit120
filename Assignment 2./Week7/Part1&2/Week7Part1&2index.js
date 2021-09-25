import { createApp } from 'vue'
import PopupWindow from './components/PopupWindow'
import App from "./App.vue"

const app = createApp(App)

app.component('PopupWindow', PopupWindow) // global registration - can be used anywhere

app.mount('#app')
