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
          <td slot="avatar" class="text-center" slot-scope="{item}" width="450">
            <div class="c-avaLtar">
              <a :href="'https://knownorigin.io/token/' + item.tokenId" target="_blank">
                <edition-asset :item="item"></edition-asset>
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
  import EditionAsset from "../ko/EditionAsset";

  export default {
    name: 'TopSellingTokens',
    components: {EditionAsset},
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
