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
    _id: ID!
    image: String
    location: String
    website: String
    distance: Int
    description: String
    author: String
    postId: ID
  }

  input PostInput {
    image: String
    location: String
    website: String
    distance: Int
    description: String
    author: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    posts: [Post]
    singleUserPosts: [Post]
  }

  type Mutation {
    signUp(username: String!, password: String!): Auth
    loginUser(username: String!, password: String!): Auth
    createPost(postData: PostInput!): Post
    deletePost: User
    deleteUser: User
  }
`;

module.exports = typeDefs;
