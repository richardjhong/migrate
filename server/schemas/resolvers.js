const { Country } = require('../models');

const resolvers = {
  Query: {
    classes: async () => {
      return await Country.find({});
    }
  }
};

module.exports = resolvers;