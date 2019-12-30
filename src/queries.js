import {gql} from 'apollo-boost';
import moment from 'moment';

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

export const LAST_30_DAYS_COUNTS = gql`
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

export const LAST_60_DAYS_COUNTS = gql`
    {
        thismonth: days(first: 60, orderBy: date, orderDirection: desc) {
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
  // Add one to ensure we get today
  let currentDayOfMonth = moment().add(1, 'day');
  const daysSinceStartOfMonth = currentDayOfMonth.diff(startOfMonth, 'days');
  console.log(`Start of month [${startOfMonth}] and current date [${currentDayOfMonth}], completed days past is [${daysSinceStartOfMonth}]`);
  return gql`
      {
          thismonth: days(first: ${daysSinceStartOfMonth}, orderBy: date, orderDirection: desc) {
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
`;
