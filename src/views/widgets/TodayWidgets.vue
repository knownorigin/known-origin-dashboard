<template>
    <div>
        <CRow>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="danger" :header="today[0].salesCount" text="Sales" v-if="today">
                    <template #default></template>
                    <template #footer>
                        <CChartBarSimple
                                style="height:70px"
                                background-color="rgb(250, 152, 152)"
                                :data-points="weekInEditionsCount()"
                                label="Sales"
                                labels="Sales"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="primary" :header="today[0].totalValueInEth" text="ETH" v-if="today">
                    <template #default></template>
                    <template #footer>
                        <CChartLineSimple
                                style="height:70px"
                                background-color="rgba(255,255,255,.2)"
                                :data-points="weekInSales()"
                                :options="{ elements: { line: { borderWidth: 2.5 }}}"
                                point-hover-background-color="primary"
                                label="Transfers"
                                labels="Transfers"
                        />
                    </template>
                </CWidgetDropdown>
            </CCol>
            <CCol sm="6" lg="3">
                <CWidgetDropdown color="info" :header="today[0].transferCount" text="Transfers" v-if="today">
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
                <CWidgetDropdown color="warning" :header="today[0].editionsCount" text="Editions" v-if="today">
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
    </div>
</template>

<script>
    import {CChartLineSimple, CChartBarSimple} from '../charts/index.js';
    import {THIS_WEEK_COUNTS, TODAY_COUNTS} from "../../queries";

    export default {
        name: 'TodayWidgets',
        components: {CChartLineSimple, CChartBarSimple},
        methods: {
            weekInSales() {
                if (!this.thisweek) return [];
                return this.thisweek.map(counts => counts.totalValueInEth).reverse();
            },
            weekInTransfers() {
                if (!this.thisweek) return [];
                return this.thisweek.map(counts => counts.transferCount).reverse();
            },
            weekInEditionsCount() {
                if (!this.thisweek) return [];
                return this.thisweek.map(counts => counts.editionsCount).reverse();
            },
        },
        apollo: {
            today: TODAY_COUNTS,
            thisweek: THIS_WEEK_COUNTS
        },
    };
</script>
