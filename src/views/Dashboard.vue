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
                    <CCol sm="6" lg="6">
                        <h4>Cumulative sales (ETH)</h4>
                        <div class="small text-muted mt-1 mb-4">April 2017 - present</div>
                        <div>
                            <MainChartExample :allTimeCounts="allTimeCounts" v-if="allTimeCounts"/>
                        </div>
                    </CCol>
                    <CCol sm="6" lg="6">
                        <h4>Monthly Growth</h4>
                        <div class="small text-muted mt-1 mb-4">last 12 months</div>
                        <div>
                            <CChartBarExample/>
                        </div>
                    </CCol>
                </CRow>
            </CCardBody>
        </CCard>

        <CCard>
            <CCardBody>
                <h4>All time</h4>
                <KoSummaryWidgets :ko-data="allTimeCounts"/>
            </CCardBody>
        </CCard>

        <CRow class="mb-4">
            <CCol sm="4">
                <CCard v-if="lastXTokens">
                    <CCardHeader>Last Sale</CCardHeader>
                    <a :href="'http://knownorigin.io/edition/' + lastXTokens[0].editionNumber" target="_blank">
                        <CCardImg :src="lastXTokens[0].metadata.image"></CCardImg>
                    </a>
                    <CCardFooter>
                        <div class="text-primary">{{ lastXTokens[0].metadata.name }}</div>
                        <div class="text-dark mb-2">{{ lastXTokens[0].metadata.artist }}</div>
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
                        <div class="text-dark mb-2">{{ lastXTokens[0].metadata.artist }}</div>
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
                        <div class="text-dark mb-2">{{ lastXTokens[0].metadata.artist }}</div>
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
        </CRow>

        <CCard>
            <CCardBody>
                <h4>{{currentMonthName}}</h4>
                <KoSummaryWidgets :ko-data="currentMonthCounts"/>
            </CCardBody>
        </CCard>

        <CCard>
            <CCardBody>
                <h4>{{lastMonthName}}</h4>
                <KoSummaryWidgets :ko-data="lastMonthCounts"/>
            </CCardBody>
        </CCard>

        <WidgetsBrand/>

        <CCard>
            <CCardBody>
                <h4>Last seven days</h4>
                <KoSummaryWidgets :ko-data="last7Counts"/>
            </CCardBody>
        </CCard>


        <!--<h4>Last 7 days</h4>-->
        <!--<KoSummaryWidgets :ko-data="last7Counts"/>-->

        <!--<h4>Last 30 days</h4>-->
        <!--<KoSummaryWidgets :ko-data="last30Counts"/>-->

        <!--<h4>Last 60 days</h4>-->
        <!--<KoSummaryWidgets :ko-data="last60Counts"/>-->


        <!--<MonthWidgets/>-->


        <!--&lt;!&ndash;<CRow>&ndash;&gt;-->
        <!--&lt;!&ndash;<CCol sm="5">&ndash;&gt;-->
        <!--&lt;!&ndash;<h4 id="traffic" class="card-title mb-0">Traffic</h4>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="small text-muted">November 2017</div>&ndash;&gt;-->
        <!--&lt;!&ndash;</CCol>&ndash;&gt;-->
        <!--&lt;!&ndash;<CCol sm="7" class="d-none d-md-block">&ndash;&gt;-->
        <!--&lt;!&ndash;<CButton color="primary" class="float-right">&ndash;&gt;-->
        <!--&lt;!&ndash;<CIcon name="cil-cloud-download"/>&ndash;&gt;-->
        <!--&lt;!&ndash;</CButton>&ndash;&gt;-->
        <!--&lt;!&ndash;<CButtonGroup class="float-right mr-3">&ndash;&gt;-->
        <!--&lt;!&ndash;<CButton&ndash;&gt;-->
        <!--&lt;!&ndash;color="outline-secondary"&ndash;&gt;-->
        <!--&lt;!&ndash;v-for="(value, key) in ['Day', 'Month', 'Year']"&ndash;&gt;-->
        <!--&lt;!&ndash;:key="key"&ndash;&gt;-->
        <!--&lt;!&ndash;class="mx-0"&ndash;&gt;-->
        <!--&lt;!&ndash;:pressed="value === selected ? true : false"&ndash;&gt;-->
        <!--&lt;!&ndash;@click="selected = value"&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;&ndash;&gt;-->
        <!--&lt;!&ndash;{{value}}&ndash;&gt;-->
        <!--&lt;!&ndash;</CButton>&ndash;&gt;-->
        <!--&lt;!&ndash;</CButtonGroup>&ndash;&gt;-->
        <!--&lt;!&ndash;</CCol>&ndash;&gt;-->
        <!--&lt;!&ndash;</CRow>&ndash;&gt;-->
        <!--&lt;!&ndash;<MainChartExample style="height:300px;margin-top:40px;"/>&ndash;&gt;-->
        <!--</CCardBody>-->
        <!--<CCardFooter>-->
        <!--<CRow class="text-center">-->
        <!--<CCol md sm="12" class="mb-sm-2 mb-0">-->
        <!--<div class="text-muted">Visits</div>-->
        <!--<strong>29.703 Users (40%)</strong>-->
        <!--<CProgress-->
        <!--class="progress-xs mt-2"-->
        <!--:precision="1"-->
        <!--color="success"-->
        <!--:value="40"-->
        <!--/>-->
        <!--</CCol>-->
        <!--<CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">-->
        <!--<div class="text-muted">Unique</div>-->
        <!--<strong>24.093 Users (20%)</strong>-->
        <!--<CProgress-->
        <!--class="progress-xs mt-2"-->
        <!--:precision="1"-->
        <!--color="info"-->
        <!--:value="20"-->
        <!--/>-->
        <!--</CCol>-->
        <!--<CCol md sm="12" class="mb-sm-2 mb-0">-->
        <!--<div class="text-muted">Pageviews</div>-->
        <!--<strong>78.706 Views (60%)</strong>-->
        <!--<CProgress-->
        <!--class="progress-xs mt-2"-->
        <!--:precision="1"-->
        <!--color="warning"-->
        <!--:value="60"-->
        <!--/>-->
        <!--</CCol>-->
        <!--<CCol md sm="12" class="mb-sm-2 mb-0">-->
        <!--<div class="text-muted">New Users</div>-->
        <!--<strong>22.123 Users (80%)</strong>-->
        <!--<CProgress-->
        <!--class="progress-xs mt-2"-->
        <!--:precision="1"-->
        <!--color="danger"-->
        <!--:value="80"-->
        <!--/>-->
        <!--</CCol>-->
        <!--<CCol md sm="12" class="mb-sm-2 mb-0 d-md-down-none">-->
        <!--<div class="text-muted">Bounce Rate</div>-->
        <!--<strong>Average Rate (40.15%)</strong>-->
        <!--<CProgress-->
        <!--class="progress-xs mt-2"-->
        <!--:precision="1"-->
        <!--:value="40"-->
        <!--/>-->
        <!--</CCol>-->
        <!--</CRow>-->
        <!--</CCardFooter>-->
        <!--</CCard>-->

        <!--<CRow>-->
        <!--<CCol md="12">-->
        <!--<CCard>-->
        <!--<CCardHeader>-->
        <!--Traffic &amp; Sales-->
        <!--</CCardHeader>-->
        <!--<CCardBody>-->
        <!--<CRow>-->
        <!--<CCol sm="12" lg="6">-->
        <!--<CRow>-->
        <!--<CCol sm="6">-->
        <!--<CCallout color="info">-->
        <!--<small class="text-muted">New Clients</small>-->
        <!--<br>-->
        <!--<strong class="h4">9,123</strong>-->
        <!--</CCallout>-->
        <!--</CCol>-->
        <!--<CCol sm="6">-->
        <!--<CCallout color="danger">-->
        <!--<small class="text-muted">Recurring Clients</small>-->
        <!--<br>-->
        <!--<strong class="h4">22,643</strong>-->
        <!--</CCallout>-->
        <!--</CCol>-->
        <!--</CRow>-->
        <!--<hr class="mt-0">-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Monday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--color="info"-->
        <!--:value="34"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--color="danger"-->
        <!--:value="78"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Tuesday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="56"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="94"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Wednesday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="12"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="67"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Thursday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="43"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="91"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Friday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="22"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="73"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Saturday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="53"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="82"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-4">-->
        <!--<div class="progress-group-prepend">-->
        <!--<span class="progress-group-text">-->
        <!--Sunday-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="9"-->
        <!--color="info"-->
        <!--/>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="69"-->
        <!--color="danger"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="legend text-center">-->
        <!--<small>-->
        <!--<sup>-->
        <!--<CBadge shape="pill" color="info">&nbsp;</CBadge>-->
        <!--</sup>-->
        <!--New clients-->
        <!--&nbsp;&nbsp;-->
        <!--<sup>-->
        <!--<CBadge shape="pill" color="danger">&nbsp;</CBadge>-->
        <!--</sup>-->
        <!--Recurring clients-->
        <!--</small>-->
        <!--</div>-->
        <!--</CCol>-->
        <!--<CCol sm="12" lg="6">-->
        <!--<CRow>-->
        <!--<CCol sm="6">-->
        <!--<CCallout color="warning">-->
        <!--<small class="text-muted">Pageviews</small>-->
        <!--<br>-->
        <!--<strong class="h4">78,623</strong>-->
        <!--</CCallout>-->
        <!--</CCol>-->
        <!--<CCol sm="6">-->
        <!--<CCallout color="success">-->
        <!--<small class="text-muted">Organic</small>-->
        <!--<br>-->
        <!--<strong class="h4">49,123</strong>-->
        <!--</CCallout>-->
        <!--</CCol>-->
        <!--</CRow>-->
        <!--<hr class="mt-0">-->
        <!--<ul class="horizontal-bars type-2">-->
        <!--<div class="progress-group">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon name="cil-user" class="progress-group-icon"/>-->
        <!--<span class="title">Male</span>-->
        <!--<span class="ml-auto font-weight-bold">43%</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="43"-->
        <!--color="warning"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group mb-5">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon name="cil-user-female" class="progress-group-icon"/>-->
        <!--<span class="title">Female</span>-->
        <!--<span class="ml-auto font-weight-bold">37%</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="37"-->
        <!--color="warning"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon name="cil-globe-alt" class="progress-group-icon"/>-->
        <!--<span class="title">Organic Search</span>-->
        <!--<span class="ml-auto font-weight-bold">-->
        <!--191,235 <span class="text-muted small">(56%)</span>-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="56"-->
        <!--color="success"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon-->
        <!--name="cib-facebook"-->
        <!--height="17"-->
        <!--class="progress-group-icon"-->
        <!--/>-->
        <!--<span class="title">Facebook</span>-->
        <!--<span class="ml-auto font-weight-bold">-->
        <!--51,223 <span class="text-muted small">(15%)</span>-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="15"-->
        <!--color="success"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon-->
        <!--name="cib-twitter"-->
        <!--height="17"-->
        <!--class="progress-group-icon"-->
        <!--/>-->
        <!--<span class="title">Twitter</span>-->
        <!--<span class="ml-auto font-weight-bold">-->
        <!--37,564 <span class="text-muted small">(11%)</span>-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="11"-->
        <!--color="success"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="progress-group">-->
        <!--<div class="progress-group-header">-->
        <!--<CIcon-->
        <!--name="cib-linkedin"-->
        <!--height="17"-->
        <!--class="progress-group-icon"-->
        <!--/>-->
        <!--<span class="title">LinkedIn</span>-->
        <!--<span class="ml-auto font-weight-bold">-->
        <!--27,319 <span class="text-muted small">&nbsp;(8%)</span>-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="progress-group-bars">-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--:value="8"-->
        <!--color="success"-->
        <!--/>-->
        <!--</div>-->
        <!--</div>-->
        <!--<div class="divider text-center">-->
        <!--<CButton color="link" size="sm" class="text-muted">-->
        <!--<CIcon name="cil-options"/>-->
        <!--</CButton>-->
        <!--</div>-->
        <!--</ul>-->
        <!--</CCol>-->
        <!--</CRow>-->
        <!--<br/>-->
        <!--<CDataTable-->
        <!--class="mb-0 table-outline"-->
        <!--hover-->
        <!--:items="tableItems"-->
        <!--:fields="tableFields"-->
        <!--head-color="light"-->
        <!--no-sorting-->
        <!--&gt;-->
        <!--<td slot="avatar" class="text-center" slot-scope="{item}">-->
        <!--<div class="c-avatar">-->
        <!--<img :src="item.avatar.url" class="c-avatar-img" alt="">-->
        <!--<span-->
        <!--class="c-avatar-status"-->
        <!--:class="`bg-${item.avatar.status || 'secondary'}`"-->
        <!--&gt;</span>-->
        <!--</div>-->
        <!--</td>-->
        <!--<td slot="user" slot-scope="{item}">-->
        <!--<div>{{item.user.name}}</div>-->
        <!--<div class="small text-muted">-->
        <!--<span>-->
        <!--<template v-if="item.user.new">New</template>-->
        <!--<template v-else>Recurring</template>-->
        <!--</span> | Registered: {{item.user.registered}}-->
        <!--</div>-->
        <!--</td>-->
        <!--<td-->
        <!--slot="country"-->
        <!--slot-scope="{item}"-->
        <!--class="text-center"-->
        <!--&gt;-->
        <!--<CIcon-->
        <!--:name="item.country.flag"-->
        <!--height="25"-->
        <!--/>-->
        <!--</td>-->
        <!--<td slot="usage" slot-scope="{item}">-->
        <!--<div class="clearfix">-->
        <!--<div class="float-left">-->
        <!--<strong>{{item.usage.value}}%</strong>-->
        <!--</div>-->
        <!--<div class="float-right">-->
        <!--<small class="text-muted">{{item.usage.period}}</small>-->
        <!--</div>-->
        <!--</div>-->
        <!--<CProgress-->
        <!--class="progress-xs"-->
        <!--v-model="item.usage.value"-->
        <!--:color="color(item.usage.value)"-->
        <!--/>-->
        <!--</td>-->
        <!--<td-->
        <!--slot="payment"-->
        <!--slot-scope="{item}"-->
        <!--class="text-center"-->
        <!--&gt;-->
        <!--<CIcon-->
        <!--:name="item.payment.icon"-->
        <!--height="25"-->
        <!--/>-->
        <!--</td>-->
        <!--<td slot="activity" slot-scope="{item}">-->
        <!--<div class="small text-muted">Last login</div>-->
        <!--<strong>{{item.activity}}</strong>-->
        <!--</td>-->
        <!--</CDataTable>-->
        <!--</CCardBody>-->
        <!--</CCard>-->
        <!--</CCol>-->
        <!--</CRow>-->

    </div>
</template>

<script>
    import moment from 'moment';
    import MonthWidgets from './widgets/MonthWidgets';
    import KoSummaryWidgets from './widgets/KoSummaryWidgets';
    import {
        ALL_TIME_COUNTS,
        LAST_7_DAYS_COUNTS,
        LAST_30_DAYS_COUNTS,
        LAST_60_DAYS_COUNTS,
        LAST_X_TOKENS,
        LAST_X_EDITIONS,
        LAST_X_AUCTION_EVENTS,
        CURRENT_MONTHS_DAYS_COUNTS, LAST_MONTHS_DAYS_COUNTS
    } from '../queries';
    import KoTodayWidgets from './widgets/KoTodayWidgets';
    import WidgetsBrand from './widgets/WidgetsBrand';
    import MainChartExample from './charts/MainChartExample';
    import CChartBarSimple from "./charts/CChartBarSimple";
    import CChartBarExample from "./charts/CChartBarExample";

    export default {
        name: 'Dashboard',
        components: {
            CChartBarExample,
            CChartBarSimple,
            MainChartExample,
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
