const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]
    searchHistory: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Country {
    _id: ID
    spiyear: String
    country: String 
    rank_score_spi:Float
    status: String
    score_spi:Float
    score_bhn:Float
    score_fow:Float
    score_opp:Float
    bhn: bhnType
    fow: fowType
    opp: oppType
  }

  type CountryCompilation {
    countryname: String
    year_catalog: [Country]
  }

  type bhnType {
    score_nbmc: Float
    score_ws: Float
    score_sh: Float
    score_ps: Float
  }

  type fowType {
    score_abk: Float
    score_aic: Float
    score_hw: Float
    score_eq: Float
  }

  type oppType {
    score_pr: Float
    score_pfc: Float
    score_incl: Float
    score_aae: Float
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
    searchHistory(username: String): [User]
    countries: [Country]
    countriesAdjust(spiyear: String): [Country]
    countryCompilations: [CountryCompilation]
    singleCompileCountry(countryname: String!): CountryCompilation
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
    commentCountry(country:String):[Comment]
    singleCountrySearchHistory( country: String, spiyear:String ):Country
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addSearchHistory(userId: ID!, searchedCountries: String!): User
    addComment(commentText: String!, commentAuthor: String!,country: String): Comment
      }

  type Comment {
    _id:ID
    commentText: String
    commentAuthor: String
    country: String
  }
`
module.exports = typeDefs;
