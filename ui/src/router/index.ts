import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../App.vue'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router