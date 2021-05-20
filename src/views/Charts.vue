<template>
  <div>
    <!-- <Barchar :data=""/> -->
    <div>
        <label for="bar-type" class="block text-sm font-medium text-gray-700">Create chart based on:</label>
        <select @change="changeBarchartData" id="bar-type" name="bar-type" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="spend">Spend</option>
          <option value="attributedROAS" selected="">Attributed ROAS</option>
          <option value="attributedRevenue">Platform Revenue</option>
          <option value="platformConversions">Platform Conversions</option>
        </select>
    </div>
    <Barchart :title="'Chart based on something'" :size="[600, 600]" :data="getUnivariateData" />
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

    const changeBarchartData = (e) => {
      console.log(e.target.value)
    } 
    return {
      changeBarchartData,
      getUnivariateData: computed(() => store.getters['campaign/getUnivariateData']('attributedRevenue'))
    }

  }
}

</script>
