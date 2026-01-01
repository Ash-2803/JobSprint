const mongoose = require("mongoose");

// creating the schema

const userSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
    },
    emailId: {
      type: String,
      required: true,
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
        "https://imgs.search.brave.com/TtfH1ZtEa1uEepTRsNF9GvcrSquOUMC5hW8z4UYh64c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJ1cGxvYWQv/MjAwNzMwMDkvZmls/ZS9vcmlnaW5hbC1l/ZWJiMTk4OTVjYzI4/ZWYzNjlkNWMxYTU2/M2FiMjMyZC5qcGc_/Zm9ybWF0PXdlYnAm/cmVzaXplPTQwMHgz/MDAmdmVydGljYWw9/Y2VudGVy",
    },
    coverPic: {
      type: String,
      default:
        "https://imgs.search.brave.com/z81Bfq-T92zCpO2R3Ip8xl5ZFtYvXHmMCRkCAnIwzHc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS12/ZWN0b3IvZGVmYXVs/dC10aHVtYm5haWwt/aW1hZ2UtcGljdHVy/ZS1pY29uLTI2MG53/LTIzNzc0ODAxNTku/anBn",
    },
    about: {
      type: String,
      default: "",
    },
    skills: {
      type: [String],
      default: [],
    },
    expereince: [
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
