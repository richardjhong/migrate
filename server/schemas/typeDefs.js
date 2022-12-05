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
  }

  type Query {
    countries: [Country]
  }
`;

module.exports = typeDefs;