import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// export const ADD_SEARCH_HISTORY = gql`
// mutation AddSearchHistory($userId: ID!, $searchedCountries: String!) {
//   addSearchHistory(userId: $userId, searchedCountries: $searchedCountries) {
//     username
//     email
//     searchHistory {
//       searchedCountries
//     }
//   }
// }
//   `;

  export const ADD_SEARCH_HISTORY = gql`
mutation AddSearchHistory($userId: ID!, $searchedCountries: String!) {
  addSearchHistory(userId: $userId, searchedCountries: $searchedCountries) {
    _id
    username
    email
    searchHistory 
  }
}
  `;