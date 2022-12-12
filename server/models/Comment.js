const { Schema, model } = require('mongoose');
const CompileCountry = require('./CompileCountry');
const Country = require('./Country');
const User = require('./User');

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
            ref: 'User',
        },
        country: {
            type: String,
            ref: 'country',
        }
    }
)

const Comment = model('Comment', commentSchema);

module.exports = Comment;