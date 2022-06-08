import { gql } from "@apollo/client";

// will need token in this mutation for jwt but not yet set up auth

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      user {
        _id
        username
      }
    }
  }
`;
