const conversationModel = require("../models/conversation");
const messageModel = require("../models/message");

// add the conversation

exports.addConversation = async (req, res) => {
  try {
    const senderId = req.user._id;
    const { receiverId, message } = req.body;

    const conversationExist = await conversationModel.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!conversationExist) {
      const newConversation = new conversationModel({
        members: [senderId, receiverId],
      });
      await newConversation.save();

      const addMessage = new messageModel({
        sender: req.user._id,
        conversation: newConversation._id,
        message,
      });
      await addMessage.save();
    } else {
      const addMessage = new messageModel({
        sender: req.user._id,
        conversation: conversationExist._id,
        message,
      });
      await addMessage.save();
    }

    return res.status(201).json({
      message: "Message Sent",
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Get all the conversation

exports.getConversation = async (req, res) => {
  try {
    const loggesInId = req.user._id;
    const conversations = await conversationModel
      .find({
        members: { $in: [loggesInId] },
      })
      .populate("members", "-password")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      message: "Fetchec Successfully",
      conversations: conversations,
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
