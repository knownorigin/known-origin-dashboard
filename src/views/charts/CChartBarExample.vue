<template>
  <CChartBar
    :datasets="defaultDatasets"
    :labels="['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']"
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
          label: 'Primary sales (USD)',
          backgroundColor: '#5165FF',
          data: [482, 2103, 1154, 939, 416, 472, 5462, 3230, 4488, 5286, 24861, 32370, 38540, 21742, 39362],
        },
        // {
        //   label: 'Secondary sale (USD)',
        //   backgroundColor: '#ffadc1',
        //   data: [482, 2103, 1154, 939, 416, 472, 5462, 3230, 4488, 5286, 24861, 32370, 38540, 21742],
        // }
      ]
    }
  }
}
</script>
