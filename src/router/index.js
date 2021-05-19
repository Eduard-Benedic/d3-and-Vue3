import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes/public'


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
