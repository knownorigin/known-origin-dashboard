<template>
    <div>
        <CRow>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="danger" :header="todayCounts[0].salesCount" text="Sales" v-if="todayCounts">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgb(250, 152, 152)"
                                :data-points="weekInSalesCount()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="danger"
                                label="Sales"
                                labels="Sales"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="primary" :header="todayCounts[0].totalValueInEth" text="ETH" v-if="todayCounts">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="weekInSales()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="primary"
                                label="ETH"
                                labels="ETH"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="info" :header="todayCounts[0].transferCount" text="Transfers" v-if="todayCounts">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="weekInTransfers()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="info"
                                label="Transfers"
                                labels="Transfers"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="warning" :header="todayCounts[0].editionsCount" text="Editions" v-if="todayCounts">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="weekInEditionsCount()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="warning"
                                label="Editions"
                                labels="Editions"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
        </CRow>
        <CRow>
          <CCol sm="6" lg="3">
            <CWidgetDropdown color="warning" :header="todayCounts[0].bidsAcceptedCount" text="Offers Accepted" v-if="todayCounts">
              <template #default></template>
              <template #footer>
                <CChartLineSimple
                    style="height:70px"
                    background-color="rgba(255,255,255,.2)"
                    :data-points="weekInBidsAcceptedCount()"
                    :options="{ elements: { line: { borderWidth: 2.5 }}}"
                    point-hover-background-color="warning"
                    label="Offers Accepted"
                    labels="Offers Accepted"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
          <CCol sm="6" lg="3">
            <CWidgetDropdown color="success" :header="todayCounts[0].bidsPlacedCount" text="Offers Made" v-if="todayCounts">
              <template #default></template>
              <template #footer>
                <CChartLineSimple
                    style="height:70px"
                    background-color="rgba(255,255,255,.2)"
                    :data-points="weekInBidsMadeCount()"
                    :options="{ elements: { line: { borderWidth: 2.5 }}}"
                    point-hover-background-color="success"
                    label="Offers Made"
                    labels="Offers Made"
                />
              </template>
            </CWidgetDropdown>
          </CCol> 
          <CCol sm="6" lg="3">
            <CWidgetDropdown color="primary" :header="todayCounts[0].bidsRejectedCount" text="Offers Rejected" v-if="todayCounts">
              <template #default></template>
              <template #footer>
                <CChartLineSimple
                    style="height:70px"
                    background-color="rgba(255,255,255,.2)"
                    :data-points="weekInBidsRejecteddCount()"
                    :options="{ elements: { line: { borderWidth: 2.5 }}}"
                    point-hover-background-color="primary"
                    label="Offers Rejected"
                    labels="Offers Rejected"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
        </CRow>
    </div>
</template>

<script>
    import {CChartLineSimple} from '../charts';
    import {LAST_WEEK_COUNTS, TODAY_COUNTS} from "../../queries";

    export default {
        name: 'KoTodayWidgets',
        components: {CChartLineSimple},
        methods: {
            weekInSalesCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.salesCount).reverse();
            },
            weekInSales() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.totalValueInEth).reverse();
            },
            weekInTransfers() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.transferCount).reverse();
            },
            weekInEditionsCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.editionsCount).reverse();
            },
            weekInBidsAcceptedCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.bidsAcceptedCount).reverse();
            },
            weekInBidsMadeCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.bidsPlacedCount).reverse();
            },
            weekInBidsRejecteddCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.bidsRejectedCount).reverse();
            },
        },
        apollo: {
            todayCounts: TODAY_COUNTS,
            lastWeekCounts: LAST_WEEK_COUNTS,
        },
    };
</script>
