<template>
    <CChartBar
            :datasets="defaultDatasets"
            :labels="[
            // 2019
            'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec',
            // 2020
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct','Nov', 'Dec',
            // 2021
            'Jan', 'Feb', 'Mar', 'Apr', 'May',
            ]"

    />
</template>

<script>
  import {CChartBar} from '@coreui/coreui-vue-chartjs'

  export default {
    name: 'SalesGraphs',
    components: {CChartBar},
    computed: {
      defaultDatasets() {
        return [
          {
            label: 'Primary (USD)',
            backgroundColor: '#5165FF',
            data: [
              // 2019
              482, 2103, 1154, 939, 416, 472, 5462, 3230, 4488, 5286, 24861,
              // 2020
              32370, 38540, 21742, 39362, 36300, 37500, 60890, 54228, 70515, 118406, 103322, 76673,
              // 2021
              207518, 722529, 1475141, 803598, 332144,
            ],
          },
          {
            label: 'Secondary (USD)',
            backgroundColor: '#ffadc1',
            data: [
              //2019
              0, 20, 0, 991, 30, 1191, 50, 105, 650, 357, 3049,
              // 2020
              5000, 2124, 5400, 1580, 2884, 2697, 5414, 8427, 6505,  34937,  26718, 12618,
              // 2021
              29332, 68928, 112453, 209154, 259119,
            ],
          }
        ]
      }
    }
  }
</script>
