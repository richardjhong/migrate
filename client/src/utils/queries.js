import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_COMMENTS = gql`
  query getComments {
    commentss {
      _id
      commentText
      commentAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_COMMENT = gql`
  query getSingleComment($commentId: ID!) {
   comment(commentId: $commentId) {
      _id
      commentText
      commentAuthor
      createdAt
      }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
 `;

export const QUERY_COUNTRIES = gql`
query allCountries {
  countries {
    _id
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
      score_aae
      score_incl
      score_pfc
      score_pr
    }
    score_opp
    opp {
      score_abk
      score_aic
      score_eq
      score_hw
    }
  }
}
`;
