<template>
  <tr class="hover:bg-gray-100">
    <td class=" px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <LightBulbIcon class="hidden"/>
          <AcademicCapIcon />
        </div>
        <div class="ml-4">
          <div class="text-base font-medium text-main">
            {{ campaign.paidSearchCampaign }}
          </div>
          <div class="text-base text-gray-500">
             {{ campaign.source }}
          </div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-base text-gray-700">
        &pound; {{ campaign.attributedRevenue }}
      </div>

    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="px-2 inline-flex text-base leading-5 font-semibold rounded-full ">
       &pound; {{ campaign.spend || 'Unknwon' }}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-base text-gray-500">
      &pound; {{ campaign.platformRevenue }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-right text-base font-medium">
      <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
    </td>
  </tr>
</template>

<script>
// import { computed } from 'vue'
import { AcademicCapIcon, LightBulbIcon } from '@heroicons/vue/outline'
export default {
  components: {
    AcademicCapIcon,
    LightBulbIcon
  },
  props: {
    campaign: {
      paidSearchCampaign: String,
      source: String,
      attributedRevenue: String,
      spend: String,
      attributedROAS: String,
      platformRevenue: String,
      platformConversions: Number
    }
  },
  setup() {

  
    return {

    }
},
}
</script>