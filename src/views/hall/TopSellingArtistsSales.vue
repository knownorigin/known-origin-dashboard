<template>
    <div>
        <CCard>
            <CCardHeader>
                <CIcon name="cil-dollar"/>
                Top 100 Artists by Sales
            </CCardHeader>
            <CCardBody>
                <CDataTable
                        class="mb-0 table-outline"
                        hover
                        :items="topSellingArtistsSales"
                        :fields="tableFields"
                        head-color="light"
                        no-sorting v-if="topSellingArtistsSales">
                    <td slot="avatar" class="text-center" slot-scope="{item}">
                        <div class="c-avatar" v-if="artistMap && artistMap[item.address.toLowerCase()]">
                            <img :src="artistMap[item.address.toLowerCase()].logo" class="c-avatar-img" :alt="artistMap[item.address.toLowerCase()].name" style="max-height: 50px">
                        </div>
                    </td>
                    <td slot="user" slot-scope="{item}" class="d-none d-sm-table-cell">
                        <div v-if="artistMap && artistMap[item.address.toLowerCase()]">{{artistMap[item.address.toLowerCase()].name}}</div>
                        <div v-else>{{item.address.toLowerCase()}}</div>
                        <div class="small text-muted">
                            Editions: {{new Date(item.firstEditionTimestamp * 1000).toDateString()}} - {{new Date(item.lastEditionTimestamp * 1000).toDateString()}}
                        </div>
                    </td>
                    <td slot="sales" slot-scope="{item}">
                        <div class="clearfix">
                            <strong class="font-2xl">{{item.salesCount}}</strong> sales
                            <div class="small text-muted">{{item.totalValueInEth}} ETH</div>
                        </div>
                    </td>
                    <td slot="highest" slot-scope="{item}" class="d-none d-sm-table-cell">
                        <strong>{{item.highestSaleValueInEth}}</strong> ETH
                    </td>
                </CDataTable>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
    import {TOP_SELLING_ARTISTS_SALES} from "../../queries";
    import {mapState} from "vuex";

    export default {
        name: 'TopSellingArtistsSales',
        data() {
            return {
                tableFields: [
                    {key: 'avatar', label: '', _classes: 'text-center'},
                    {key: 'user', _classes: 'd-none d-sm-table-cell'},
                    {key: 'sales'},
                    {key: 'highest'},
                ],
            };
        },
        computed: {
            ...mapState([
                'artistMap',
            ]),
        },
        apollo: {
            topSellingArtistsSales: TOP_SELLING_ARTISTS_SALES,
        },
    };
</script>
