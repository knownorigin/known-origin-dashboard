<template>
  <div>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-dollar"/>
        Top 25 Tokens
      </CCardHeader>
      <CCardBody>
        <CDataTable
                class="mb-0 table-outline"
                hover
                :items="topTokens"
                :fields="tableFields"
                head-color="light"
                no-sorting v-if="topTokens">
          <td slot="avatar" class="text-center" slot-scope="{item}">
            <div class="c-avaLtar">
              <a :href="'https://knownorigin.io/token/' + item.tokenId" target="_blank">
                <img :src="item.metadata.image" style="max-height: 100px; vertical-align: center" :alt="item.metadata.name">
              </a>
            </div>
          </td>
          <td slot="name" slot-scope="{item}" class="text-left d-none d-sm-table-cell">
            <a :href="'https://knownorigin.io/token/' + item.tokenId" target="_blank">
              <span class="text-primary">{{item.metadata.name}}</span>
              <span class="text-muted ml-1">by {{item.metadata.artist}}</span>
            </a>
          </td>
          <td slot="sales" slot-scope="{item}">
            <div class="clearfix">
              <strong class="font-2xl">{{item.primaryValueInEth}}</strong> ETH
              <div class="small">{{new Date(item.birthTimestamp * 1000).toLocaleDateString()}}</div>
              <div class="badge badge-dark">ID {{item.tokenId}}</div>
            </div>
          </td>
        </CDataTable>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
  import {TOP_TOKENS} from "../../queries";

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
      topTokens: TOP_TOKENS,
    },

    //https://knownorigin.io/api/artist/all
  };
</script>
