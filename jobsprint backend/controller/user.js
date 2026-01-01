const { json } = require("express");
const User = require("../models/user");

const { OAuth2Client } = require("google-auth-library");

const bcrypt = require("bcryptjs");

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

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

    return res.status(200).json({user: userExist})
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

exports.register = async (req, res) => {
  try {
    // console.log(req.body)
    const { emailId, password, userName } = req.body;
    const isuserExist = await User.findOne({ emailId });
    if (isuserExist) {
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

exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const userExist = await User.findOne({ emailId });
    // console.log(isuserExist)
    if (!userExist) {
      return res.status(401).json({ error: "Invalid Email or password" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
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
