import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
 `;

export const QUERY_COUNTRIES = gql`
query allCountries {
  countries {
    _id
    spiyear
    country
    rank_score_spi
    status
    score_spi
    score_bhn
    bhn {
      score_nbmc
      score_ps
      score_sh
      score_ws
    }
    score_fow
    fow {
      score_abk
      score_aic
      score_eq
      score_hw
    }
    score_opp
    opp {
      score_aae
      score_incl
      score_pfc
      score_pr
    }
  }
}
`;

export const QUERY_COMPILATIONS = gql`
  query allCompilations {
    countryCompilations {
      countryname
      year_catalog {
        _id
        spiyear
        country
          rank_score_spi
        status
        score_spi
        score_bhn
        bhn {
          score_nbmc
          score_ps
          score_sh
          score_ws
        }
        score_fow
        fow {
          score_abk
          score_aic
          score_eq
          score_hw
         
        }
        score_opp
        opp {
          score_aae
          score_incl
          score_pfc
          score_pr
        }
      }
    }
  }
`
