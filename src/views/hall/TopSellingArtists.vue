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
                            <!--<img :src="item.avatar.url" class="c-avatar-img" alt="">-->
                        </div>
                    </td>
                    <td slot="user" slot-scope="{item}">
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

    export default {
        name: 'TopSellingArtists',
        data() {
            return {
                tableItems: [
                    {
                        avatar: {url: 'img/avatars/1.jpg', status: 'success'},
                        user: {name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'USA', flag: 'cif-us'},
                        usage: {value: 50, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Mastercard', icon: 'cib-cc-mastercard'},
                        activity: '10 sec ago'
                    },
                    {
                        avatar: {url: 'img/avatars/2.jpg', status: 'danger'},
                        user: {name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015'},
                        country: {name: 'Brazil', flag: 'cif-br'},
                        usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Visa', icon: 'cib-cc-visa'},
                        activity: '5 minutes ago'
                    },
                    {
                        avatar: {url: 'img/avatars/3.jpg', status: 'warning'},
                        user: {name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'India', flag: 'cif-in'},
                        usage: {value: 74, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Stripe', icon: 'cib-stripe'},
                        activity: '1 hour ago'
                    },
                    {
                        avatar: {url: 'img/avatars/4.jpg', status: ''},
                        user: {name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'France', flag: 'cif-fr'},
                        usage: {value: 98, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'PayPal', icon: 'cib-paypal'},
                        activity: 'Last month'
                    },
                    {
                        avatar: {url: 'img/avatars/5.jpg', status: 'success'},
                        user: {name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'Spain', flag: 'cif-es'},
                        usage: {value: 22, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Google Wallet', icon: 'cib-google-pay'},
                        activity: 'Last week'
                    },
                    {
                        avatar: {url: 'img/avatars/6.jpg', status: 'danger'},
                        user: {name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015'},
                        country: {name: 'Poland', flag: 'cif-pl'},
                        usage: {value: 43, period: 'Jun 11, 2015 - Jul 10, 2015'},
                        payment: {name: 'Amex', icon: 'cib-cc-amex'},
                        activity: 'Last week'
                    }
                ],
                tableFields: [
                    {key: 'avatar', label: '', _classes: 'text-center'},
                    {key: 'user'},
                    {key: 'sales'},
                    {key: 'highest'},
                ]
            };
        },
        apollo: {
            topSellingArtists: TOP_SELLING_ARTISTS,
        },
    };
</script>
