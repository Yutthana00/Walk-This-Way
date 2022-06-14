const User = require("../models/User");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    //get all posts
    posts: async () => {
      return Post.find();
    },
    //get posts by a single user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne(
          { _id: context.user._id } || { username: context.user.username }
        );
      }
    },
  },

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
      args,
      context
      // { image, location, website, distance, description }
    ) => {
      try {
        const { image, location, website, distance, description, author } =
          args.postData;
        const post = await Post.create({
          image,
          location,
          website,
          distance,
          description,
          author,
        });
        if (context.user) {
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { posts: post } },
            { new: true }
          );
          return updatedUser;
        }
        return post;
      } catch (error) {
        console.log(error);
        console.log("post error at createPost resolvers");
        return null;
        // if (context.user) {
        //   const updatedUser = await User.findByIdAndUpdate(
        //     { _id: context.user._id },
        //     { $push: { posts: post } },
        //     { new: true }
        //   );
        //updatedUser;
        //} else {return}
      }
    },
  },
};

module.exports = resolvers;
