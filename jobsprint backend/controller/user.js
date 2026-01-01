// const { json } = require("express");
const User = require("../models/user");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const cookiesOptions = {
  httpOnly : true,
  secure : false, // set to true in production
  sameSite : "Lax" // set  to None in production
}
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Login through the Google Auth

exports.loginThroughGmail = async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const { sub, emailID, name, picture } = payload;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      userExist = await User.create({
        googleId: sub,
        emailId,
        userName: name,
        profilePic: picture,
      });
    }
    const jwttoken = jwt.sign({userId : userExist._id}, process.env.JWT_PRIVATE_KEY);
    // console.log(token)
    res.cookie('token',jwttoken,cookiesOptions)

    return res.status(200).json({ user: userExist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Register the user 

exports.register = async (req, res) => {
  try {
    // console.log(req.body)
    const { emailId, password, userName } = req.body;
    const userExist = await User.findOne({ emailId });
    if (userExist) {
      return res.status(400).json({
        error:
          "Already have an account with thie email , Please try with other email ",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword)
    const newUser = new User({ emailId, password: hashedPassword, userName });
    await newUser.save();

    return res.status(200).json({
      message: "User Registered Successfully",
      success: "yes",
      data: newUser,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Login through the Email

exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const userExist = await User.findOne({ emailId });
    // console.log(userExist)
    if (!userExist) {
      return res.status(401).json({ error: "Invalid Email or password" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    const token = jwt.sign({userId : userExist._id}, process.env.JWT_PRIVATE_KEY);
    // console.log(token)
    res.cookie('token',token,cookiesOptions)
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully Logged in",
      user: userExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
