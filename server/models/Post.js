const { Schema, model, Types } = require("mongoose");

// This Schema is the Model for Posts saved to our db
const PostSchema = new Schema({
  postId: {
    type: Schema.Types.ObjectId,
    default: new Types.ObjectId(),
  },

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
  },

  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Post = model("Post", PostSchema);

module.exports = Post;
