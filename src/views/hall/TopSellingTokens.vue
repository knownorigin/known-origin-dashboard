<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-dollar"/>
        Top 10 Tokens (per day)
      </CCardHeader>
      <CCardBody>
        <CDataTable
                class="mb-0 table-outline"
                hover
                :items="highestTokenPerDay"
                :fields="tableFields"
                head-color="light"
                no-sorting v-if="highestTokenPerDay">
          <td slot="avatar" class="text-center" slot-scope="{item}">
            <div class="c-avaLtar">
              <a :href="'https://knownorigin.io/token/' + item.highestValueToken.tokenId" target="_blank">
                <img :src="item.highestValueToken.metadata.image" style="max-height: 50px; vertical-align: center" :alt="item.highestValueToken.metadata.name">
              </a>
            </div>
          </td>
          <td slot="name" slot-scope="{item}" class="text-left d-none d-sm-table-cell">
            <div>{{item.highestValueToken.metadata.name}}</div>
          </td>
          <td slot="sales" slot-scope="{item}">
            <div class="clearfix">
              <strong>{{item.highestValueInEth}}</strong> ETH
              <div class="small text-muted">{{item.date}}</div>
            </div>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
  import {HIGHEST_TOKEN_PER_DAY} from "../../queries";

  export default {
    name: 'TopSellingTokens',
    data() {
      return {
        tableFields: [
          {key: 'avatar', label: '', _classes: 'text-center'},
          {key: 'name',  _classes: 'text-left d-none d-sm-table-cell'},
          {key: 'sales'},
        ]
      };
    },
    apollo: {
      highestTokenPerDay: HIGHEST_TOKEN_PER_DAY,
    },

    //https://knownorigin.io/api/artist/all
  };
</script>
