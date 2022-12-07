const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
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

  type bhnType {
    score_nbmc: Float
    score_ws: Float
    score_sh: Float
    score_ps: Float
  }

  type fowType {
    score_pr: Float
    score_pfc: Float
    score_incl: Float
    score_aae: Float
  }

  type oppType {
    score_abk: Float
    score_aic: Float
    score_hw: Float
    score_eq: Float
  }

  type Query {
    users: [User]
    user(username: String!): User
    comments(username: String): [Comment]
    comment(commentId: ID!): Comment
    me: User
    countries: [Country]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(commentId: ID!, commentText: String!): Comment
    removeComment(commentId: ID!, commentId: ID!): Comment
  }
`


module.exports = typeDefs;
