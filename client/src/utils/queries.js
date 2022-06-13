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
    }
  }
`;
