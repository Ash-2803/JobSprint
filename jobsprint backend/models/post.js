const mongoose = require("mongoose");

// creating the schema

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    desc: {
      type: String,
    },
    image_link: {
      type: String,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    comments: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


const postModel = mongoose.model("post", postSchema);
module.exports = postModel;