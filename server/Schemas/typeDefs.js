const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    postCount: Int
    posts: [Post]
  }

  type Post {
    postId: ID!
    image: String
    location: String
    website: String
    distance: Int
    description: String
  }

  input PostInput {
    image: String
    location: String
    website: String
    distance: Int
    description: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    signUp(username: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    createPost(postData: PostInput!): Post
  }
`;

module.exports = typeDefs;
