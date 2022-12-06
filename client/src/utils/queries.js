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
