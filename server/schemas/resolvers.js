const { Country } = require('../models');

const resolvers = {
  Query: {
    countries: async () => {
      return await Country.find({});
    }
  }
};

module.exports = resolvers;