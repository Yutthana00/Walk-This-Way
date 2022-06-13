import { gql } from "@apollo/client";

export const SIGNUP = gql`
  mutation signUp($username: String!, $password: String!) {
    signUp(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($postData: PostInput!) {
    createPost(postData: $postData) {
      postId
      image
      location
      website
      distance
      description
      author
    }
  }
`;
