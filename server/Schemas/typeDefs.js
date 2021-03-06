const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    password: String!
    profilePic: String
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
    author: User
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

  type DeleteUser {
    success: Boolean!
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
    addProfilePic(profilePic: String): User
    createPost(postData: PostInput!): Post
    deletePost(_id: ID!): User
    deleteUser(userId: ID): DeleteUser
  }
`;

module.exports = typeDefs;
