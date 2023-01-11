import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ('./assets/global.scss')
import { createPinia } from 'pinia'
// import piniaPluginPersistentState from 'pinia-plugin-persistent-state'

const app = createApp(App);
const pinia = createPinia();
// pinia.use(piniaPluginPersistentState);
app.use(pinia)
app.use(router)
app.mount('#app');