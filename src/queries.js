import {gql} from "apollo-boost";

export const TODAY_COUNTS = gql`
    {
        today: days(first: 1, orderBy: date, orderDirection: desc) {
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

export const THIS_WEEK_COUNTS = gql`
    {
        thisweek: days(first: 6, skip: 1, orderBy: date, orderDirection: desc) {
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

export const THIS_MONTHS_COUNTS = gql`
    {
        thismonth: days(first: 30, orderBy: date, orderDirection: desc) {
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
