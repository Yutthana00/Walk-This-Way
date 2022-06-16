const { ApolloError } = require("apollo-server-express");
const cloudinary = require("cloudinary").v2;
const User = require("../models/User");
const Post = require("../models/Post");
const { signToken } = require("../utils/auth");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const resolvers = {
  Query: {
    //get all posts
    posts: async () => {
      return Post.find();
    },
    //get a single user
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne(
          { _id: context.user._id } || { username: context.user.username }
        );
      }
    },
    //get posts from a single user
    singleUserPosts: async (parent, args, context) => {
      return Post.find({ author: context.user.username });
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
    createPost: async (parent, args, context) => {
      try {
        const {
          image: base64Image,
          location,
          website,
          distance,
          description,
          author,
        } = args.postData;

        const response = await cloudinary.uploader.upload(base64Image);
        const imageUrl = response.url || "";

        const post = await Post.create({
          image: imageUrl,
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

        if (error?.message.includes("File size too large")) {
          throw new ApolloError("Image size is too big", "IMAGE_TOO_BIG");
        }

        return null;
      }
    },

    addProfilePic: async (parent, args, context) => {
      try {
        const base64Image = args.profilePic;

        const response = await cloudinary.uploader.upload(base64Image);
        const imageUrl = response.url || "";
        if (context.user) {
          const profilePic = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { profilePic: imageUrl },
            { new: true }
          );
          return profilePic;
        }
      } catch (error) {
        console.log(error);
      }
    },

    deleteUser: async (parent, args, context) => {
      if (context.user) {
        await User.findOneAndDelete({ _id: context.user._id });
        return { success: true };
      }
      if (error) {
        return { success: false };
        console.log(error);
      }
    },
  },
};

module.exports = resolvers;
