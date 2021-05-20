<template>
  <div>
    <h2>{{title}}</h2>
    <svg :width="size[0]" :height="size[1]" ref="svgRef">
      
    </svg>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue'

import { select } from 'd3-selection'
import { scaleLinear } from 'd3-scale'
import { max } from 'd3-array'


export default {
  props: {
    data: Array,
    size: Array,
    title: String
  },
  beforeMount() {
    
  },
  beforeUnmount() {

  },
  setup(props) {
    const svgRef = ref(null)
    console.log(props)



    onMounted(() => {
        createBarChart(svgRef.value, props.data, props.size)
    })
    return {
      svgRef
    }
  }
}

function createBarChart (node, data, size) {


  const dataMax = max(data)
  const yScale = scaleLinear().domain([0, dataMax]).range([0, size[1]])

  select(node)
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
  
  select(node)
    .selectAll('rect')
    .data(data)
    .exit()
    .remove()

  select(node)
    .selectAll('rect')
    .data(data)
    .style('fill', '#fe9922')
    .attr('x', (d, i) => i * 25)
    .attr('y', d => 600 - yScale(d))
    .attr('height', d => yScale(d))
    .attr('width', 25)
}

</script>
