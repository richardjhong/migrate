const { Schema, model } = require('mongoose');
const CompileCountry = require('./CompileCountry');
const Country = require('./Country');
const User = require('./User');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
    {
        commentText: {
            type: String,
            required: "You can't leave a blank comment!",
            minlength: 1,
            maxlength: 280,
            trim: true,
          },
        commentAuthor: {
            type: String,
            required:true,
            trim: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
          },
        country: {
            type: String,
            required:true,
        }
    }
)

const Comment = model('Comment', commentSchema);

module.exports = Comment;