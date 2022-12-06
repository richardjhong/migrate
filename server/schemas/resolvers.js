const { Country } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { User, Comment } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('comments');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('comments');
    },
    comments: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Comment.find(params).sort({ createdAt: -1 });
    },
    comment: async (parent, { commentId }) => {
      return Comment.findOne({ _id: commentId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    countries: async () => {
        return await Country.find();
      }
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addComment: async (parent, { commentText }, context) => {
      if (context.user) {
        const comment = await Comment.create({
          commentText,
          commentAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { comments: comment._id } }
        );

        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { commentId }, context) => {
      if (context.user) {
        const comment = await Comment.findOneAndDelete({
          _id: commentId,
          commentAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { comments: comment._id } }
        );

        return comment;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

};

module.exports = resolvers;
