<template>
    <div>
        <CCard>
            <CCardHeader>
                <CIcon name="cil-dollar"/>
                Top 100 Selling Artists
            </CCardHeader>
            <CCardBody>
                <CDataTable
                        class="mb-0 table-outline"
                        hover
                        :items="topSellingArtists"
                        :fields="tableFields"
                        head-color="light"
                        no-sorting v-if="topSellingArtists">
                    <td slot="avatar" class="text-center" slot-scope="{item}">
                        <div class="c-avatar">
                            <img :src="'img/avatars/1.jpg'" class="c-avatar-img" alt="">
                        </div>
                    </td>
                    <td slot="user" slot-scope="{item}" class="d-none d-sm-table-cell">
                        <div>{{item.address}}</div>
                        <div class="small text-muted">
                            Editions: {{new Date(item.firstEditionTimestamp * 1000).toDateString()}} - {{new Date(item.lastEditionTimestamp * 1000).toDateString()}}
                        </div>
                    </td>
                    <td slot="sales" slot-scope="{item}">
                        <div class="clearfix">
                            <strong>{{item.totalValueInEth}}</strong> ETH
                            <div class="small text-muted">{{item.salesCount}} sales</div>
                        </div>
                    </td>
                    <td slot="highest" slot-scope="{item}">

                        <strong>{{item.highestSaleValueInEth}}</strong> ETH
                    </td>
                </CDataTable>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
    import {TOP_SELLING_ARTISTS} from "../../queries";
    import axios from 'axios';

    export default {
        name: 'TopSellingArtists',
        data() {
            return {
                tableFields: [
                    {key: 'avatar', label: '', _classes: 'text-center'},
                    {key: 'user', _classes: 'd-none d-sm-table-cell'},
                    {key: 'sales'},
                    {key: 'highest'},
                ],
                artistMap: {},
            };
        },
        apollo: {
            topSellingArtists: TOP_SELLING_ARTISTS,
        },
        created() {
            axios.get(`https://knownorigin.io/api/artist/all`).then((res) => {
                res.data.forEach(a => {
                    a.ethAddress.forEach(add => this.artistMap[`${add}`] = a);
                });
                console.log(this.artistMap);
            });

        }
    };
</script>
