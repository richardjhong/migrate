import { gql } from '@apollo/client';

export const QUERY_COUNTRIES = gql`
  query allCountries {
    countries {
      _id
      country
      rank_score_spi
    }
  }
`;
