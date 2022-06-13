const { Schema, model, Types } = require("mongoose");

// This Schema is the Model for Posts saved to our db
const PostSchema = new Schema({
  image: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  website: {
    type: String,
  },

  distance: {
    type: Number,
  },

  description: {
    type: String,
    maxlength: 280,
  },

  author: {
    type: String,
  },
});

const Post = model("Post", PostSchema);

module.exports = Post;
