const User = require("../models/User");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");

const resolvers = {
  // Mutations will add or update any kind of data in our db
  Mutation: {
    // Creating a User
    // Destructure the passed in variables to username and password
    signUp: async (parent, { username, password }, context) => {
      try {
        // await the promise and User.create saves the user to our database
        const user = await User.create({
          username,
          password,
        });
        const token = signToken(user);

        return { token, user };
      } catch (error) {
        // If it doesn't work, Console.log the error
        console.log(error);
        return null;
      }
    },

    // User Login Logic
    loginUser: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      const correctPw = await user.isCorrectPassword(password);
      const token = signToken(user);
      return { token, user };
    },

    // Add a post to database
    createPost: async (
      parent,
      { image, location, website, distance, description }
    ) => {
      try {
        const post = await Post.create({
          image,
          location,
          website,
          distance,
          description,
        });
        return post;
      } catch (error) {
        console.log(error);
        console.log("post error at createPost resolvers");
        return null;
      }
    },
  },
};

module.exports = resolvers;
