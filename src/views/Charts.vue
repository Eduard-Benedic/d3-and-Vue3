<template>
  <div>
    <!-- <Barchar :data=""/> -->
    <Barchart :data="getUnivariateData" />
  </div>
</template>

<script>

import Barchart from '@/components/Graphics/Barchart.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  components: {
    Barchart
  },
  setup () {

    const store = useStore()

    return {
      getUnivariateData: computed(() => store.getters['campaign/getUnivariateData']('attributedRevenue'))
    }

  }
}

</script>
