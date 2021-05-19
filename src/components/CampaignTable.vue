<template>
    <div class="flex flex-col bg-white">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <!-- TABLE -->
            
            <table class="min-w-full divide-y divide-gray-200">
                <Head />
                <Row v-for="campaign in getCampaignListData"
                    :key="campaign.id" 
                    :campaign="campaign" />
            </table>

            <!-- END TABLE -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Row from './CampaignTable/Row.vue'
import Head from './CampaignTable/Head.vue'
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Row,
    Head
  },
  setup() {
    const store = useStore()


    onMounted(() => {
      store.dispatch('campaign/getCampaignData')
    })
    
    return {
      getCampaignListData: computed(() => store.getters['campaign/getCampaignListData'])
    }
  }
}
</script>
