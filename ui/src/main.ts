import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import router from './router'
import api from './api'

createApp(App).use(store).use(router).mount('#app')


document.onkeydown = function (data) {
    if (data.which === 27) { // ESC or F1
        store.commit('SET_STATE', false)
        api.CloseEverything()
    }
}