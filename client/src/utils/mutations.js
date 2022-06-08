import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signup($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
