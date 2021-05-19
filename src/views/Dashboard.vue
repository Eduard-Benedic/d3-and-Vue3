<template>
  <div>
    <h1 class="text-2xl sm:text-4xl py-12 font-bold">Welcome to Dashboard</h1>
    <CampaignTable />
  </div>
</template>

<script>
import CampaignTable from '@/components/CampaignTable.vue'

export default {
  name: 'CandidateDashboard',
  components: {
    CampaignTable
  },
  setup() {
    
  }
}
</script>
