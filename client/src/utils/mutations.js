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

export const ADD_PROFILE_PIC = gql`
  mutation addProfilePic($profilePic: String) {
    addProfilePic(profilePic: $profilePic) {
      _id
      username
      profilePic
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($postData: PostInput!) {
    createPost(postData: $postData) {
      _id
      image
      location
      website
      distance
      description
      author {
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID) {
    deleteUser(userId: $userId) {
      success
    }
  }
`;
