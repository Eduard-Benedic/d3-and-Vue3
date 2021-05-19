


const getters = {
  getCampaignListData(state) {
    console.log(state)
    return state.campaignList
  },
  getUnivariateData (state) {
    return (type) => {
      return state.campaignList.map(campaign => {
        return campaign[type]
      })
    }
    
  }
}

export default getters