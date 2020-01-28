<template>
    <div>
        <CCard>
            <CCardHeader>
                <CIcon name="cil-jigsaw"/>
                Top Artists by Editions (KODA v2)
            </CCardHeader>
            <CCardBody>
                <CDataTable
                        class="mb-0 table-outline"
                        hover
                        :items="editionsByArtists"
                        :fields="tableFields"
                        head-color="light"
                        no-sorting v-if="editionsByArtists">
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
                    <td slot="editions" slot-scope="{item}">
                        <div class="clearfix">
                            <strong class="font-2xl">{{item.editionsCount}}</strong> editions
                            <div class="small text-muted"></div>
                        </div>
                    </td>
                    <td slot="supply" slot-scope="{item}" class="d-none d-sm-table-cell">
                        <div class="clearfix">
                            <strong>{{item.supply}}</strong> supply
                            <div class="small text-muted">{{item.issuedCount}} issued</div>
                            <div class="small text-muted">{{parseInt(item.issuedCount) - parseInt(item.salesCount)}} gifts</div>
                        </div>
                    </td>
                    <td slot="sold" slot-scope="{item}" class="d-none d-sm-table-cell">
                        <div class="clearfix" v-if="parseInt(item.issuedCount) && parseInt(item.supply)">
                            <strong>{{ (parseInt(item.issuedCount) / parseInt(item.supply) * 100).toFixed(0) }}</strong>%
                            <div class="small text-muted">{{item.salesCount}} sales</div>
                        </div>
                    </td>
                </CDataTable>
            </CCardBody>
        </CCard>
    </div>
</template>

<script>
    import {EDITIONS_BY_ARTISTS} from "../../queries";
    import {mapState} from "vuex";

    export default {
        name: 'TopSellingArtistsEditions',
        data() {
            return {
                tableFields: [
                    {key: 'avatar', label: '', _classes: 'text-center'},
                    {key: 'user', _classes: 'd-none d-sm-table-cell'},
                    {key: 'editions'},
                    {key: 'supply'},
                    {key: 'sold'},
                ],
            };
        },
        computed: {
            ...mapState([
                'artistMap',
            ]),
        },
        apollo: {
            editionsByArtists: EDITIONS_BY_ARTISTS,
        },
    };
</script>
