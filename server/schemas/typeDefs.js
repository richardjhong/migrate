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

type Query {
  users: [User]
  user(username: String!): User
  comments(username: String): [Comment]
  comment(commentId: ID!): Comment
  me: User
}

type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth
  addComment(commentText: String!): Comment
  addComment(commentId: ID!, commentText: String!): Comment
  removeComment(commentId: ID!): Comment
  removeComment(commentId: ID!, commentId: ID!): Comment
}

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
