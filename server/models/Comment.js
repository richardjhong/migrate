const { Schema, model } = require('mongoose');
const User = require('./User')

const commentSchema = new Schema({
  commentText: {
    type: String,
    required: true,
  },
  commentAuthor: 
    {
      type: String,
      required: true
    },
  
});

const Comment = model('Comment', commentSchema);

module.exports = Comment;
