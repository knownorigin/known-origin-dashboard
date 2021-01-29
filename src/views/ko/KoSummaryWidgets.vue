<template>
    <CRow>
        <CCol sm="6" lg="6">
            <CWidgetDropdown color="danger" :header="monthInSalesCountTotal()" text="Sales" v-if="koData">
                <template #default></template>
                <template #footer>
                    <CChartLineSimple
                            style="height:70px"
                            background-color="rgb(250, 152, 152)"
                            :data-points="monthInSalesCount()"
                            :options="{ elements: { line: { borderWidth: 2.5 }}}"
                            point-hover-background-color="danger"
                            label="Sales"
                            labels="Sales"
                    />
                </template>
            </CWidgetDropdown>
        </CCol>
        <CCol sm="6" lg="6">
            <CWidgetDropdown color="primary" :header="monthInSalesTotal()" text="ETH" v-if="koData">
                <template #default></template>
                <template #footer>
                    <CChartLineSimple
                            style="height:70px"
                            background-color="rgba(255,255,255,.2)"
                            :data-points="monthInSales()"
                            :options="{ elements: { line: { borderWidth: 2.5 }}}"
                            point-hover-background-color="primary"
                            label="Transfers"
                            labels="Transfers"
                    />
                </template>
            </CWidgetDropdown>
        </CCol>
        <!--            <CCol sm="6" lg="3">-->
        <!--                <CWidgetDropdown color="info" :header="monthInTransfersTotal()" text="Transfers" v-if="koData">-->
        <!--                    <template #default></template>-->
        <!--                    <template #footer>-->
        <!--                        <CChartLineSimple-->
        <!--                                style="height:70px"-->
        <!--                                background-color="rgba(255,255,255,.2)"-->
        <!--                                :data-points="monthInTransfers()"-->
        <!--                                :options="{ elements: { line: { borderWidth: 2.5 }}}"-->
        <!--                                point-hover-background-color="info"-->
        <!--                                label="Transfers"-->
        <!--                                labels="Transfers"-->
        <!--                        />-->
        <!--                    </template>-->
        <!--                </CWidgetDropdown>-->
        <!--            </CCol>-->
        <!--            <CCol sm="6" lg="3">-->
        <!--                <CWidgetDropdown color="warning" :header="monthInEditionsCountTotal()" text="Editions" v-if="koData">-->
        <!--                    <template #default></template>-->
        <!--                    <template #footer>-->
        <!--                        <CChartLineSimple-->
        <!--                                style="height:70px"-->
        <!--                                background-color="rgba(255,255,255,.2)"-->
        <!--                                :data-points="monthInEditionsCount()"-->
        <!--                                :options="{ elements: { line: { borderWidth: 2.5 }}}"-->
        <!--                                point-hover-background-color="warning"-->
        <!--                                label="Editions"-->
        <!--                                labels="Editions"-->
        <!--                        />-->
        <!--                    </template>-->
        <!--                </CWidgetDropdown>-->
        <!--            </CCol>-->
        <!--        </CRow>-->
        <!--        <CRow>-->
        <!--          <CCol sm="6" lg="3">-->
        <!--            <CWidgetDropdown color="primary" :header="monthBidVolumeTotal()" text="Bidding Volume" v-if="koData">-->
        <!--              <template #default></template>-->
        <!--              <template #footer>-->
        <!--                <CChartLineSimple-->
        <!--                    style="height:70px"-->
        <!--                    background-color="rgba(255,255,255,.2)"-->
        <!--                    :data-points="monthBidVolume()"-->
        <!--                    :options="{ elements: { line: { borderWidth: 2.5 }}}"-->
        <!--                    point-hover-background-color="primary"-->
        <!--                    label="Transfers"-->
        <!--                    labels="Transfers"-->
        <!--                />-->
        <!--              </template>-->
        <!--            </CWidgetDropdown>-->
        <!--          </CCol>-->
        <!--          <CCol sm="6" lg="3">-->
        <!--            <CWidgetDropdown color="primary" :header="monthBidPlacedTotal()" text="Bid Placed" v-if="koData">-->
        <!--              <template #default></template>-->
        <!--              <template #footer>-->
        <!--                <CChartLineSimple-->
        <!--                    style="height:70px"-->
        <!--                    background-color="rgba(255,255,255,.2)"-->
        <!--                    :data-points="monthBidPlacedVolume()"-->
        <!--                    :options="{ elements: { line: { borderWidth: 2.5 }}}"-->
        <!--                    point-hover-background-color="primary"-->
        <!--                    label="Transfers"-->
        <!--                    labels="Transfers"-->
        <!--                />-->
        <!--              </template>-->
        <!--            </CWidgetDropdown>-->
        <!--          </CCol>-->
    </CRow>
</template>

<script>
  import {CChartLineSimple} from '../charts';

  export default {
    name: 'KoSummaryWidgets',
    components: {CChartLineSimple},
    props: ['koData', 'label'],
    methods: {
      monthInSalesCountTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseInt(counts.salesCount), 0).toString();
      },
      monthInSalesCount() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.salesCount).reverse();
      },
      monthInSalesTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseFloat(counts.totalValueInEth), 0).toFixed(2).toString();
      },
      monthInSales() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.totalValueInEth).reverse();
      },
      monthBidVolumeTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseFloat(counts.totalValuePlaceInBids), 0).toFixed(2).toString();
      },
      monthBidVolume() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.totalValuePlaceInBids).reverse();
      },
      monthBidPlacedTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseFloat(counts.bidsPlacedCount), 0).toFixed(2).toString();
      },
      monthBidPlacedVolume() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.bidsPlacedCount).reverse();
      },
      monthInTransfersTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseInt(counts.transferCount), 0).toString();
      },
      monthInTransfers() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.transferCount).reverse();
      },
      monthInEditionsCountTotal() {
        if (!this.koData) return null;
        return this.koData.reduce((accum, counts) => accum + parseInt(counts.editionsCount), 0).toString();
      },
      monthInEditionsCount() {
        if (!this.koData) return [];
        return this.koData.map(counts => counts.editionsCount).reverse();
      },
    },
  };
</script>
