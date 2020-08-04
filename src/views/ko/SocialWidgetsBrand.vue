<template>
  <CRow>
    <template v-if="!noCharts">
      <CCol md="3" sm="6">
        <CWidgetBrand
          color="facebook"
          right-header="774"
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
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="twitter"
          right-header="5.5k"
          right-footer="followers"
          left-header="8.6K"
          left-footer="tweets"
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
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="danger"
          right-header="832"
          right-footer="followers"
          left-header="278"
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
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="262,685"
          right-footer="alexa rank"
          left-header="6.7K"
          left-footer="visits"
          color="warning"
        >
          <CIcon
            name="cil-globe-alt"
            height="52"
            class="my-4"
          />
          <CChartLineSimple
            class="c-chart-brand"
            background-color="rgba(255,255,255,.1)"
            :data-points="[10, 20, 56, 122, 297, 323, 564, 670]"
            label="Followers"
            labels="months"
          />
        </CWidgetBrand>
      </CCol>
    </template>
    <template v-else>
      <CCol md="3" sm="6">
        <CWidgetBrand
          color="facebook"
          right-header="89k"
          right-footer="friends"
          left-header="459"
          left-footer="feeds"
        >
          <CIcon
            name="cib-facebook"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="twitter"
          right-header="973k"
          right-footer="followers"
          left-header="1.792"
          left-footer="tweets"
        >
          <CIcon
            name="cib-twitter"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
       <CCol md="3" sm="6">
        <CWidgetBrand
          color="linkedin"
          right-header="500+"
          right-footer="contracts"
          left-header="292"
          left-footer="feeds"
        >
          <CIcon
            name="cib-linkedin"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
       </CCol>
      <CCol md="3" sm="6">
        <CWidgetBrand
          right-header="12"
          right-footer="events"
          left-header="4"
          left-footer="meetings"
          color="warning"
        >
          <CIcon
            name="cil-calendar"
            height="56"
            class="my-4"
          />
        </CWidgetBrand>
      </CCol>
    </template>
  </CRow>
</template>

<script>
import { CChartLineSimple } from '../charts'

export default {
  name: 'SocialWidgetsBrand',
  components: {
    CChartLineSimple
  },
  props: {
    noCharts: Boolean
  }
}
</script>

<style scoped>
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
</style>
