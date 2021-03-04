<template>
    <div>
        <CCard>
            <CCardBody>
                <h4>Today</h4>
                <KoTodayWidgets/>
            </CCardBody>
        </CCard>

        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="0" lg="2">
<!--                        <h4>Cumulative sales primary (ETH)</h4>-->
<!--                        <div class="small text-muted mt-1 mb-4">April 2017 - present</div>-->
<!--                        <div>-->
<!--                            <CumulativePrimarySales :allTimeCounts="allTimeCounts" v-if="allTimeCounts"/>-->
<!--                        </div>-->
                        <div>

                            <CWidgetBrand
                                    color="danger"
                                    right-header="11.8k"
                                    right-footer="followers"
                                    left-header="723"
                                    left-footer="posts"
                            >
                                <CIcon
                                        name="cib-instagram"
                                        height="52"
                                        class="my-4"
                                />
                                <CChartLineSimple
                                        class="c-chart-brand"
                                        background-color="rgba(255,255,255,.1)"
                                        :data-points="[10, 33, 44, 200, 300, 500, 565, 832]"
                                        label="Contracts"
                                        labels="months"
                                />
                            </CWidgetBrand>

                            <CWidgetBrand
                                    color="twitter"
                                    right-header="17.8K"
                                    right-footer="followers"
                            >
                                <CIcon
                                        name="cib-twitter"
                                        height="52"
                                        class="my-4"
                                />
                                <CChartLineSimple
                                        class="c-chart-brand"
                                        background-color="rgba(255,255,255,.1)"
                                        :data-points="[1, 13, 9, 17, 34, 41, 38, 42, 45, 52]"
                                        label="Followers"
                                        labels="months"
                                />
                            </CWidgetBrand>
                        </div>
                    </CCol>
                    <CCol sm="12" lg="8">
                        <h4>Monthly revenue (USD)</h4>
                        <div class="small text-muted mt-1 mb-4">Secondary sales data from OpenSea</div>
                        <div>
                            <SalesGraphs/>
                        </div>
                    </CCol>
                    <CCol sm="0" lg="2">
                        <!--                        <h4>Cumulative sales primary (ETH)</h4>-->
                        <!--                        <div class="small text-muted mt-1 mb-4">April 2017 - present</div>-->
                        <!--                        <div>-->
                        <!--                            <CumulativePrimarySales :allTimeCounts="allTimeCounts" v-if="allTimeCounts"/>-->
                        <!--                        </div>-->
                        <div>

                            <CWidgetBrand
                                    color="success"
                                    right-header="4672"
                                    right-footer="members"
                                    left-header="1"
                                    left-footer="years"
                            >
                                <CIcon
                                        name="cib-discord"
                                        height="52"
                                        class="my-4"
                                />
                                <CChartLineSimple
                                        class="c-chart-brand"
                                        background-color="rgba(255,255,255,.1)"
                                        :data-points="[10, 33, 44, 200, 300, 500, 565, 832]"
                                        label="Contracts"
                                        labels="months"
                                />
                            </CWidgetBrand>

                            <CWidgetBrand
                                    color="facebook"
                                    right-header="1309"
                                    right-footer="community"
                                    left-header="2"
                                    left-footer="years"
                            >
                                <CIcon
                                        name="cib-telegram-plane"
                                        height="52"
                                        class="my-4"
                                />
                                <CChartLineSimple
                                        class="c-chart-brand"
                                        background-color="rgba(255,255,255,.1)"
                                        :data-points="[50, 70, 150, 250, 443, 636, 650, 774]"
                                        label="Friends"
                                        labels="months"
                                />
                            </CWidgetBrand>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>


        <WidgetsBrand/>

        <!-- <CRow class="mb-4">
            <CCol sm="4">
                <CCard v-if="lastXTokens">
                    <CCardHeader>Last Sale</CCardHeader>
                    <a :href="'http://knownorigin.io/edition/' + lastXTokens[0].editionNumber" target="_blank">
                        <CCardImg :src="lastXTokens[0].metadata.image"></CCardImg>
                    </a>
                    <CCardFooter>
                        <div class="text-primary">{{ lastXTokens[0].metadata.name }}</div>
                        <div class="text-dark mb-2" v-if="lastXTokens && lastXTokens.length > 0 && lastXTokens[0].metadata">{{ lastXTokens[0].metadata.artist }}</div>
                        <div class="small">{{ lastXTokens[0].primaryValueInEth }} ETH</div>
                        <div class="small text-muted mt-2">{{ (lastXTokens[0].birthTimestamp * 1000) | moment('from')
                            }}
                        </div>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol sm="4">
                <CCard v-if="lastXEditions">
                    <CCardHeader>Last Edition</CCardHeader>
                    <a :href="'http://knownorigin.io/edition/' + lastXEditions[0].id" target="_blank">
                        <CCardImg :src="lastXEditions[0].metadata.image"></CCardImg>
                    </a>
                    <CCardFooter>
                        <div class="text-primary">{{ lastXEditions[0].metadata.name }}</div>
                        <div class="text-dark mb-2" v-if="lastXEditions && lastXEditions.length > 0 && lastXEditions[0].metadata">{{ lastXEditions[0].metadata.artist }}</div>
                        <div class="small text-muted mt-2">{{ (lastXEditions[0].createdTimestamp * 1000) |
                            moment('from') }}
                        </div>
                    </CCardFooter>
                </CCard>
            </CCol>
            <CCol sm="4">
                <CCard v-if="lastXAuctionEvents">
                    <CCardHeader>Last Auction Event</CCardHeader>
                    <a :href="'http://knownorigin.io/edition/' + lastXAuctionEvents[0].edition.id" target="_blank">
                        <CCardImg :src="lastXAuctionEvents[0].edition.metadata.image"></CCardImg>
                    </a>
                    <CCardFooter>
                        <div class="text-primary">{{ lastXAuctionEvents[0].edition.metadata.name }}</div>
                        <div class="text-dark mb-2" v-if="lastXAuctionEvents && lastXAuctionEvents.length > 0 && lastXAuctionEvents[0].metadata">{{ lastXAuctionEvents[0].metadata.artist }}</div>
                        <div class="small">
                            {{ lastXAuctionEvents[0].ethValue }} ETH<br/>
                            {{ lastXAuctionEvents[0].name }}
                        </div>
                        <div class="small text-muted mt-2">{{ (lastXAuctionEvents[0].timestamp * 1000) | moment('from')
                            }}
                        </div>
                    </CCardFooter>
                </CCard>
            </CCol>
        </CRow> -->

        <CCard>
            <CCardBody>
                <CRow>
                    <CCol sm="6" lg="6">
                        <h4>{{currentMonthName}}</h4>
                        <KoSummaryWidgets :ko-data="currentMonthCounts"/>
                    </CCol>
                    <CCol sm="6" lg="6">
                        <h4>{{lastMonthName}}</h4>
                        <KoSummaryWidgets :ko-data="lastMonthCounts"/>
                    </CCol>
                    <CCol sm="6" lg="6">
                        <h4>All time</h4>
                        <KoSummaryWidgets :ko-data="allTimeCounts"/>
                    </CCol>
                    <CCol sm="6" lg="6">
                        <h4>Last seven days</h4>
                        <KoSummaryWidgets :ko-data="last7Counts"/>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>

<!--        <CCard>-->
<!--            <CCardBody>-->
<!--                <h4>Last seven days</h4>-->
<!--                <KoSummaryWidgets :ko-data="last7Counts"/>-->
<!--            </CCardBody>-->
<!--        </CCard>-->

<!--        <CCard>-->
<!--          <CCardBody>-->
<!--            <h4>Today misc figures</h4>-->
<!--            <KoTodayMiscFiguress/>-->
<!--          </CCardBody>-->
<!--        </CCard>-->


    </div>
</template>

<script>
    import moment from 'moment';
    import MonthWidgets from './ko/MonthWidgets';
    import KoSummaryWidgets from './ko/KoSummaryWidgets';
    import {
        ALL_TIME_COUNTS,
        LAST_7_DAYS_COUNTS,
        LAST_30_DAYS_COUNTS,
        LAST_60_DAYS_COUNTS,
        LAST_X_TOKENS,
        LAST_X_EDITIONS,
        LAST_X_AUCTION_EVENTS,
        CURRENT_MONTHS_DAYS_COUNTS,
        LAST_MONTHS_DAYS_COUNTS
    } from '../queries';
    import KoTodayWidgets from './ko/KoTodayWidgets';
    import WidgetsBrand from './ko/SocialWidgetsBrand';
    import CumulativePrimarySales from './ko/CumulativePrimarySales';
    import CChartBarSimple from "./charts/CChartBarSimple";
    import SalesGraphs from "./ko/SalesGraph";
    import KoTodayMiscFigures from "@/views/ko/KoTodayMiscFigures";

    export default {
        name: 'Dashboard',
        components: {
          KoTodayMiscFigures,
            SalesGraphs,
            CChartBarSimple,
            CumulativePrimarySales,
            WidgetsBrand,
            KoSummaryWidgets,
            MonthWidgets,
            KoTodayWidgets,
        },
        data() {
            return {
                selected: 'Month',
                currentMonthName: moment().format('MMM'),
                lastMonthName: moment().subtract(1, 'months').format('MMM'),
            };
        },
        methods: {
            color(value) {
                let $color;
                if (value <= 25) {
                    $color = 'info';
                } else if (value > 25 && value <= 50) {
                    $color = 'success';
                } else if (value > 50 && value <= 75) {
                    $color = 'warning';
                } else if (value > 75 && value <= 100) {
                    $color = 'danger';
                }
                return $color;
            }
        },
        apollo: {
            last7Counts: LAST_7_DAYS_COUNTS,
            last30Counts: LAST_30_DAYS_COUNTS,
            last60Counts: LAST_60_DAYS_COUNTS,
            allTimeCounts: ALL_TIME_COUNTS,
            lastMonthCounts: LAST_MONTHS_DAYS_COUNTS(),
            currentMonthCounts: CURRENT_MONTHS_DAYS_COUNTS(),
            lastXTokens: LAST_X_TOKENS,
            lastXEditions: LAST_X_EDITIONS,
            lastXAuctionEvents: LAST_X_AUCTION_EVENTS,
        },
    };
</script>
