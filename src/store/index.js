
import { createStore, createLogger } from 'vuex'
import campaign from './modules/campaign/index'

export default createStore({
  modules: {
    campaign
  },
  plugins: process.env.NODE_ENV !== 'production'
    ? [createLogger()]
    : []
})
