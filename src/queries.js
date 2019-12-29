import {gql} from "apollo-boost";

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
        last30Counts: days(first: 7, orderBy: date, orderDirection: desc) {
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
`

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
                    scarcity
                }
            }
        }
    }
`
