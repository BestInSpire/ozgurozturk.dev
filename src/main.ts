import { createApp } from 'vue'
import './assets/sass/global/main.sass'
import App from './App.vue'
import {router} from './router'

createApp(App)
    .use(router)
    .mount('#app')