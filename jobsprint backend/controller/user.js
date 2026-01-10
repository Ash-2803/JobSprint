// const { json } = require("express");
const User = require("../models/user");
const { OAuth2Client } = require("google-auth-library");
const notificationModel = require("../models/notification");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const cookiesOptions = {
  httpOnly: true,
  secure: false, // set to true in production
  sameSite: "Lax", // set  to None in production
};
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
    
    const { sub, email , name, picture } = payload;
  

    let userExist = await User.findOne({ email });

    if (!userExist) {
      userExist = await User.create({
        googleId: sub,
        emailId:email,
        userName: name,
        profilePic: picture,
      });
    }
    let jwttoken = jwt.sign(
      { userId: userExist._id },
      process.env.JWT_PRIVATE_KEY
    );
    // console.log(token)
    res.cookie("token", jwttoken, cookiesOptions);

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
    const { emailId, password, confirm_password, userName } = req.body;
    const userExist = await User.findOne({ emailId });
    if (userExist) {
      return res.status(400).json({
        error:
          "Already have an account with thie email , Please try with other email ",
      });
    }

    if (password !== confirm_password) {
      return res
        .status(400)
        .json({ error: "Please fill the correct password" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ emailId, password: hashedPassword, userName });
    await newUser.save();

    newUser.password = undefined;

    return res.status(200).json({
      message: "User Registered Successfully",
      success: true,
      data: newUser,
    });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Login through the Email

exports.login = async (req, res) => {
  try {
    const { emailId, password } = req.body;
    const userExist = await User.findOne({ emailId });
    // console.log(userExist)
    if(userExist && !userExist.password){
      return res.status(400).json({
        error : "Please login through Gmail"
      })
    }
    if (!userExist) {
      return res.status(401).json({ error: "Invalid Email or password" });
    }
    const isMatch = await bcrypt.compare(password, userExist.password);
    const token = jwt.sign(
      { userId: userExist._id },
      process.env.JWT_PRIVATE_KEY
    );
    // console.log(token)
    res.cookie("token", token, cookiesOptions);
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

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    const userExist = await User.findById(req.user._id);
    if (!userExist) {
      return res.status(400).json({ error: "User Does not exist" });
    }
    const updateData = await User.findByIdAndUpdate(userExist._id, user);
    // console.log(updateData)
    const userData = await User.findById(req.user._id);
    return res.status(200).json({
      message: "User Updated Successfully",
      user: userData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(400).json({ error: "No such user exist" });
    }
    return res.status(200).json({
      message: "User fetched Successfully",
      user: userExist,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

exports.logout = async (req, res) => {
  res
    .clearCookie("token", cookiesOptions)
    .json({ message: "Logged out successfully" });
};

// find the user

exports.findUser = async (req, res) => {
  try {
    const { query } = req.query;
    const users = await User.find({
      $and: [
        {
          _id: { $ne: req.user._id },
        },
        {
          $or: [
            {
              userName: { $regex: new RegExp(`^${query}`, "i") },
            },
            {
              emailId: { $regex: new RegExp(`^${query}`, "i") },
            },
          ],
        },
      ],
    });
    return res.status(201).json({
      message: "Fetched Member",
      users: users,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// send the friend request

exports.sendFriendRequest = async (req, res) => {
  try {
    const sender = req.user._id;
    const { receiver } = req.body;

    // checking wether the user exist or not
    const userExist = await User.findById(receiver);
    if (!userExist) {
      return res.status(400).json({
        error: "No such user exist",
      });
    }

    // if already friends with sender
    const index = req.user.friends.findIndex((id) => id.equals(receiver));
    if (index !== -1) {
      return res.status(400).json({
        error: "Already friend",
      });
    }

    // if sender already send the request

    const lastIndex = userExist.pending_friends.findIndex((id) =>
      id.equals(req.user._id)
    );
    if (lastIndex !== -1) {
      return res.status(400).json({
        error: "Already Sent Request",
      });
    }
    // if both the above conditions are not true then we have to send the request to the user
    userExist.pending_friends.push(sender);

    const content = `${req.user.userName} has send you the friend request`;
    const notification = new notificationModel({
      sender,
      receiver,
      content,
      type: "friendRequest",
    });

    await notification.save();
    await userExist.save();

    res.status(200).json({
      message: "Friend Request sent",
    });
  } catch (err) {
    // console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// accept the friend request

exports.acceptFriendRequest = async (req, res) => {
  try {
    const { friendId } = req.body;
    const selfId = req.user._id;

    const friendData = await User.findById(friendId);
    if (!friendData) {
      return res.status(400).json({
        error: "No such user exist",
      });
    }

    const index = req.user.pending_friends.findIndex((id) =>
      id.equals(friendId)
    );
    if (index !== -1) {
      req.user.pending_friends.splice(index, 1);
    } else {
      return res.status(400).json({
        error: "No any request from such user",
      });
    }

    req.user.friends.push(friendId);

    friendData.friends.push(req.user._id);
    const content = `${req.user.userName} has accepted your friend request`;
    const notification = new notificationModel({
      sender: req.user._id,
      receiver: friendId,
      content,
      type: "friendRequest",
    });

    await notification.save();
    await friendData.save();
    await req.user.save();

    res.status(200).json({
      message: "You both are friends now",
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// get the friend list 

exports.getfriendList = async(req,res)=>{
  try{
    const friendList = await req.user.populate('friends');
    return res.status(200).json({
      friends :friendList.friends
    })

  }catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}
// pending requests

exports.getPendingFriendList = async(req,res)=>{
  try{
    const pendingFriendList = await req.user.populate('pending_friends');
    return res.status(200).json({
      pendingFriends :pendingFriendList.pending_friends
    })

  }catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}

// removing the friends

exports.removeFromFriendList = async(req,res)=>{
  try{
    const selfId = req.user._id;
    const {friendId} = req.params;

    const friendData = await User.findById(friendId);
    if(!friendData){
      return res.status(400).json({
        error : " No such user exist"
      })
    }

    const index = req.user.friends.findIndex(id=> id.equals(friendId));

    const friendIndex = friendData.friends.findIndex(id=> id.equals(selfId));

    if(index!==-1){
      req.user.friends.splice(index,1);
    }else{
      return res.status(400).json({
        error : "No any request from such users"
      })
    }
    if(friendIndex!==-1){
      friendData.friends.splice(friendIndex,1)
    }else{
      return res.status(400).json({
        error : "No any request from such users"
      })
    }


    await req.user.save();
    await friendData.save();
    return res.status(200).json({
      message : "You both are disconnected now"
    })




  }catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}
