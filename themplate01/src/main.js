import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Particles from 'vue3-particles'

createApp(App).use(Particles).use(store).use(router).mount('#app')
