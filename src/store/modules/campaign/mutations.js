import { SET_CAMPAIGN_DATA } from "./mutation-type"



const mutations = {
  [SET_CAMPAIGN_DATA](state, {
    campaignList
  }) {
    
    state.campaignList = campaignList
  }
}


export default mutations