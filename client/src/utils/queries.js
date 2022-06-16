import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getAllPosts {
    posts {
      _id
      image
      location
      website
      distance
      description
      author
      postId
    }
  }
`;

export const SINGLE_USER_POSTS = gql`
  query singleUserPosts {
    singleUserPosts {
      _id
      image
      location
      website
      distance
      description
      author
      postId
    }
  }
`;

export const GET_ME = gql`
  query me {
    me {
      _id
      username
      postCount
      posts {
        _id
        image
        location
        website
        distance
        description
        author
        postId
      }
      profilePic
    }
  }
`;
