const resolvers = {
  Mutation: {
    signUp: (parent, variables, context) => {
      console.log(variables);

      return null;
    },
  },
};

module.exports = resolvers;
