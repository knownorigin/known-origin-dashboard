import {gql} from 'apollo-boost';
import moment from 'moment';

export const TODAY_COUNTS = gql`
    {
        todayCounts: days(first: 1, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const LAST_WEEK_COUNTS = gql`
    {
        lastWeekCounts: days(first: 6, skip: 1, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const LAST_7_DAYS_COUNTS = gql`
    {
        last7Counts: days(first: 7, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const LAST_30_DAYS_COUNTS = gql`
    {
        last30Counts: days(first: 30, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const LAST_60_DAYS_COUNTS = gql`
    {
        last60Counts: days(first: 60, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const ALL_TIME_COUNTS = gql`
    {
        allTimeCounts: days(first: 1000, orderBy: date, orderDirection: desc) {
            date
            transferCount
            salesCount
            giftsCount
            editionsCount
            bidsAcceptedCount
            bidsPlacedCount
            bidsRejectedCount
            totalValueInEth
            highestValueInEth
        }
    }
`;

export const CURRENT_MONTHS_DAYS_COUNTS = () => {
    const startOfMonth = moment().startOf('month');
    return gql`
        {
            currentMonthCounts: days(orderBy: id, orderDirection: asc, where:{ date_gte: "${startOfMonth.format("YYYY-MM-DD")}"}) {
                date
                transferCount
                salesCount
                giftsCount
                editionsCount
                bidsAcceptedCount
                bidsPlacedCount
                bidsRejectedCount
                totalValueInEth
                highestValueInEth
            }
        }
    `;
};

export const LAST_MONTHS_DAYS_COUNTS = () => {
    const startOfMonth = moment().subtract(1, 'months').startOf('month');
    const endOfMonth = moment().subtract(1, 'months').endOf('month');
    return gql`
        {
            lastMonthCounts: days(orderBy: id, orderDirection: asc, 
                where:{ 
                    date_gte: "${startOfMonth.format("YYYY-MM-DD")}",
                    date_lte: "${endOfMonth.format("YYYY-MM-DD")}"
                }
            ) {
                date
                transferCount
                salesCount
                giftsCount
                editionsCount
                bidsAcceptedCount
                bidsPlacedCount
                bidsRejectedCount
                totalValueInEth
                highestValueInEth
            }
        }
    `;
};

export const TOP_SELLING_ARTISTS = gql`
    {
        topSellingArtists: artists(first: 100, orderBy: totalValueInEth, orderDirection: desc) {
            address
            supply
            totalValueInEth
            editionsCount
            salesCount
            giftsCount
            highestSaleValueInEth
            firstEditionTimestamp
            lastEditionTimestamp
        }
    }
`;

export const TOP_SELLING_ARTISTS_SALES = gql`
    {
        topSellingArtistsSales: artists(first: 100, orderBy: salesCount, orderDirection: desc) {
            address
            supply
            totalValueInEth
            editionsCount
            salesCount
            giftsCount
            highestSaleValueInEth
            firstEditionTimestamp
            lastEditionTimestamp
        }
    }
`;


export const HIGHEST_TOKEN_PER_DAY = gql`
    {
        highestTokenPerDay: days(first: 10, orderBy: highestValueInEth, orderDirection: desc) {
            highestValueInEth
            date
            highestValueToken {
                tokenId
                metadata {
                    name
                    image
                    artist
                }
            }
        }
    }
`;

export const TOP_TOKENS = gql`
    {
        topTokens: tokens(first:25, orderBy: primaryValueInEth, orderDirection:desc) {
            tokenId
            primaryValueInEth
            birthTimestamp
            metadata {
                name
                image
                artist
            }
        }
    }
`

export const LAST_X_TOKENS = gql`
    {
        lastXTokens: tokens(first: 1, orderBy: birthTimestamp, orderDirection: desc) {
            tokenId
            birthTimestamp
            primaryValueInEth
            metadata {
                name
                artist
                image
            }
            editionNumber
        }
    }
`;

export const LAST_X_EDITIONS = gql`
    {
        lastXEditions: editions(first: 1, orderBy: createdTimestamp, orderDirection: desc) {
            createdTimestamp
            metadata {
                name
                artist
                image
            }
            id
        }
    }
`;

export const LAST_X_AUCTION_EVENTS = gql`
    {
        lastXAuctionEvents: auctionEvents(first: 1, orderBy:timestamp, orderDirection:desc) {
            edition {
                id
                metadata {
                    name
                    image
                }
            }
            name
            ethValue
            timestamp
        }
    }
`;
