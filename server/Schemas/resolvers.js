const User = require("../models/User");

const resolvers = {
  // Mutations will add or update any kind of data in our db
  Mutation: {
    // Creating a User
    signUp: async (parent, { username, password }, context) => {
      try {
        const user = await User({
          username,
          password,
        });
        return user;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
  },
};

module.exports = resolvers;
