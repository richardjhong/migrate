const { AuthenticationError } = require('apollo-server-express');
const { User, SearchHistory, Country, CompileCountry,Comment } = require('../models');
const { signToken } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => {
      return User.find()
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('comments');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id })
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    searchHistory: async (parent, { username }) => {
      const params = username ? { username } : {};
      return searchHistory.find(params).sort({ createdAt: -1 });
    },
    countryCompilations: async () => {
      return await CompileCountry.find({}).populate('year_catalog');
    },
    countries: async () => {
      return await Country.find({});
    },
    
    singleCompileCountry: async (parent, { countryname }) => {
      return CompileCountry.findOne({ countryname :{
        //case insensitive
        $regex : new RegExp(countryname, "i") }
       }).populate('year_catalog')
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    commentCountry:async(parent,{country})=>{
      const params = country ? { country } : {};
      return Comment.find(params).sort({createdAt: -1})
    }

  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    addComment: async (parent, { commentText, commentAuthor, country }) => {
      const comment = await Comment.create({ commentText, commentAuthor,country });

      await User.findOneAndUpdate(
        { username: commentAuthor },
        { $addToSet: { comments: comment._id } }
      );

      return comment;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError(`No user found with this email address. Please sign up with a new account.`);

      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addSearchHistory: async (parent, { searchInput }, context) => {
      if (context.user) {
        const searchHistory = await SearchHistory.create({
          searchInput,//does this need to match the model?
          searchAuthor: context.user.username, ///does this need to match the model?
        });
        throw new AuthenticationError('You need to be logged in!');
      }
  },
}};


module.exports = resolvers;
