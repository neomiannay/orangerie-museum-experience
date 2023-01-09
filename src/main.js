import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ('./assets/global.scss')
import Vue3MobileDetection from "vue3-mobile-detection";

const app = createApp(App);
app.use(Vue3MobileDetection);
app.use(router).mount('#app')