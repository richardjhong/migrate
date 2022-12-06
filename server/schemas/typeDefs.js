const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Country {
    _id: ID
    country: String 
    rank_score_spi:Float,
    status: String,
    score_spi:Float,
    score_bhn:Float,
    score_fow:Float,
    score_opp:Float,
    bhn: bhnType,
    fow: fowType,
    opp: oppType,
  }

  type bhnType {
    score_nbmc: Float,
    score_ws: Float,
    score_sh: Float,
    score_ps: Float
  }

  type fowType {
    score_pr: Float,
    score_pfc: Float,
    score_incl: Float,
    score_aae: Float
  }

  type oppType {
    score_abk: Float,
    score_aic: Float,
    score_hw: Float,
    score_eq: Float
  }

  type Query {
    countries: [Country]
  }
`;

module.exports = typeDefs;
