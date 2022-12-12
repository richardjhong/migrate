import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      searchHistory {
        country
        createdAt
      }
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

 export const QUERY_SEARCH_HISTORY = gql`
  query searchHistory($username: String!) {
    searchHistory(username: $username) {
      _id
      username
      searchHistory {
        country
        createdAt
      }
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
export const QUERY_SINGLE_COMPILATION = gql`
  query SingleCompileCountry($countryname: String!) {
    singleCompileCountry(countryname: $countryname) {
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

export const QUERY_USER_COMMENTS = gql`
  query comments($username: String!) {
    comments(username: $username) {
      _id:
      commentText
      commentAuthor
      country     
    }
  }
`


export const QUERY_COUNTRY_COMMENTS = gql`
  query commentCountry($country: String!) {
    commentCountry(country: $country) {
      _id:
      commentText
      commentAuthor
      country     
    }
  }
`

export const QUERY_SINGLE_COMMENT = gql`
  query comment($commentId: String!) {
    comment(commentId: $country) {
      _id:
      commentText
      commentAuthor
      country     
    }
  }
`
