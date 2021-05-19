import actions from './actions'
import mutations from './mutations'
import getters from './getters'


const state = {
  campaignList: []
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
}