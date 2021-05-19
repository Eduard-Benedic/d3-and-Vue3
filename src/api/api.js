import data from './data-test.js'

export const getCampaignData = () => {
  // Simulate API call
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(data)
      }, 1000)
    })
}