<template>
  <CChartBar
    :datasets="defaultDatasets"
    :labels="['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan']"
  />
</template>

<script>
import { CChartBar } from '@coreui/coreui-vue-chartjs'

export default {
  name: 'CChartBarExample',
  components: { CChartBar },
  computed: {
    defaultDatasets () {
      return [
        {
          label: 'primary sales in USD',
          backgroundColor: '#5165FF',
          data: [482, 2103, 1154, 939, 416, 472, 5462, 3230, 4488, 5286, 24861, 27687],
        }
      ]
    }
  }
}
</script>
