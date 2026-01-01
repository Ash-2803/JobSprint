const mongoose = require("mongoose");

// creating the schema

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const conversationModel = mongoose.model("conversation", conversationSchema);
module.exports = conversationModel;
