import { SET_CAMPAIGN_DATA } from './mutation-type'
import { getCampaignData } from '../../../api/api'

const actions = {
  getCampaignData({commit}) {
    getCampaignData()
      .then(data => {
        commit(SET_CAMPAIGN_DATA, {
          campaignList: data
        })
      })
  }
}

export default actions