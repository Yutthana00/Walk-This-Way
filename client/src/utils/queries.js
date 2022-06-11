import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query getAllPosts {
    posts {
      postId
      image
      location
      website
      distance
      description
    }
  }
`;
