const User = require("../models/User");

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
  },
};

module.exports = resolvers;
