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
            weekInBidsRejectedCount() {
                if (!this.lastWeekCounts) return [];
                return this.lastWeekCounts.map(counts => counts.bidsRejectedCount).reverse();
            },
            dayInSecondarySalesValue() {
                if (!this.todayCounts) return [];
                return this.todayCounts.map(counts => counts.secondarySalesValue).reverse();
            },
        },
        apollo: {
            todayCounts: TODAY_COUNTS,
            lastWeekCounts: LAST_WEEK_COUNTS,
        },
    };
</script>
