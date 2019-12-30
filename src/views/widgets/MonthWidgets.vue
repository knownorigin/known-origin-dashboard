<template>
    <div>
        <CRow>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="danger" :header="monthInSalesCountTotal()" text="Sales" v-if="thismonth">
                    <template #default></template>
                    <template #footer>
                        <CChartBarSimple
                                style="height:70px"
                                background-color="rgb(250, 152, 152)"
                                :data-points="monthInSalesCount()"
                                label="Sales"
                                labels="Sales"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="primary" :header="monthInSalesTotal()" text="ETH" v-if="thismonth">
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
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="info" :header="monthInTransfersTotal()" text="Transfers" v-if="thismonth">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="monthInTransfers()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="info"
                                label="Transfers"
                                labels="Transfers"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="warning" :header="monthInEditionsCountTotal()" text="Editions" v-if="thismonth">
                    <template #default></template>
                    <template #footer>
                        <CChartBarSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="monthInEditionsCount()"
                                label="Editions"
                                labels="Editions"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
        </CRow>
    </div>
</template>

<script>
    import {CChartLineSimple, CChartBarSimple} from '../charts/index.js';

    export default {
        name: 'MonthWidgets',
        components: {CChartLineSimple, CChartBarSimple},
        props: ['query'],
        methods: {
            monthInSalesCountTotal() {
                if (!this.thismonth) return null;
                return this.thismonth.reduce((accum, counts) => accum + parseInt(counts.salesCount), 0).toString();
            },
            monthInSalesCount() {
                if (!this.thismonth) return [];
                return this.thismonth.map(counts => counts.salesCount).reverse();
            },
            monthInSalesTotal() {
                if (!this.thismonth) return null;
                return this.thismonth.reduce((accum, counts) => accum + parseFloat(counts.totalValueInEth), 0).toFixed(2).toString();
            },
            monthInSales() {
                if (!this.thismonth) return [];
                return this.thismonth.map(counts => counts.totalValueInEth).reverse();
            },
            monthInTransfersTotal() {
                if (!this.thismonth) return null;
                return this.thismonth.reduce((accum, counts) => accum + parseInt(counts.transferCount), 0).toString();
            },
            monthInTransfers() {
                if (!this.thismonth) return [];
                return this.thismonth.map(counts => counts.transferCount).reverse();
            },
            monthInEditionsCountTotal() {
                if (!this.thismonth) return null;
                return this.thismonth.reduce((accum, counts) => accum + parseInt(counts.editionsCount), 0).toString();
            },
            monthInEditionsCount() {
                if (!this.thismonth) return [];
                return this.thismonth.map(counts => counts.editionsCount).reverse();
            },
        },
        apollo: {
            thismonth: {
              query() {
                return this.query
              }
            }
        },
    };
</script>
