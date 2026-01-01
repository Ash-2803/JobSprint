const mongoose = require("mongoose");

// creating the schema

const notificationSchema = new mongoose.Schema(
  {
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["friendRequest", "comment"],
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    postId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const notificationModel = mongoose.model("notification", notificationSchema);
module.exports = notificationModel;
