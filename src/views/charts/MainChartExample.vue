<template>
  <div>
    <CChartLine
      :datasets="defaultDatasets"
      :options="defaultOptions"
    />
  </div>
</template>

<script>
import { CChartLine } from '@coreui/coreui-vue-chartjs'
import { getColor, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  name: 'MainChartExample',
  components: {
    CChartLine
  },
  props: ['allTimeCounts'],
  computed: {
    defaultDatasets () {
      const brandSuccess = getColor('success') || '#4dbd74'
      const brandInfo = '#5165FF'
      const brandDanger = getColor('danger') || '#f86c6b'

      let data1 = [];
      this.allTimeCounts.map(c => parseFloat(c.totalValueInEth)).reverse().reduce(function(a, b, i) {
        return data1[i] = a + b;
      }, 0);

      // data1 = data1.slice(data1.length - 30, data1.length - 1);

      // const data2 = []
      // const data3 = []

      // for (let i = 0; i <= elements; i++) {
      //   data2.push(random(80, 100))
      //   data3.push(65)
      // }
      return [
        {
          label: 'Cumulative sales',
          backgroundColor: hexToRgba(brandInfo, 10),
          borderColor: brandInfo,
          pointHoverBackgroundColor: brandInfo,
          borderWidth: 2,
          data: data1
        },
        // {
        //   label: 'My Second dataset',
        //   backgroundColor: 'transparent',
        //   borderColor: brandSuccess,
        //   pointHoverBackgroundColor: brandSuccess,
        //   borderWidth: 2,
        //   data: data2
        // },
        // {
        //   label: 'My Third dataset',
        //   backgroundColor: 'transparent',
        //   borderColor: brandDanger,
        //   pointHoverBackgroundColor: brandDanger,
        //   borderWidth: 1,
        //   borderDash: [8, 5],
        //   data: data3
        // }
      ]
    },
    defaultOptions () {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 3,
              stepSize: 50,
              max: 600
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    }
  }
}
</script>
