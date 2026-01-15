const mongoose = require("mongoose");

// creating the schema

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      unique: true,
      sparse: true,
      
    },
    emailId: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    userName: {
      type: String,
      default: "",
    },
    headline: {
      type: String,
      default: "",
    },
    curr_company: {
      type: String,
      default: "",
    },
    curr_location: {
      type: String,
      default: "",
    },
    profilePic: {
      type: String,
      default:
        "https://stock.adobe.com/search?k=default",
    },
    coverPic: {
      type: String,
      default:
        "https://imgs.search.brave.com/SqT65iTufTledQDV4t6YawUZYxTsv2BJjxBYlbH2ERI/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdHls/ZXMucmVkZGl0bWVk/aWEuY29tL3Q1X3Ns/OHY3L3N0eWxlcy9i/YW5uZXJCYWNrZ3Jv/dW5kSW1hZ2VfYXVn/aWQ2NXRnYWMyMS5w/bmc",
    },
    about: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    experience: [
      {
        designation: {
          type: String,
        },
        company_name: {
          type: String,
        },
        duration: {
          type: String,
        },
        location: {
          type: String,
        },
      },
    ],
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    pending_friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    resume: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
