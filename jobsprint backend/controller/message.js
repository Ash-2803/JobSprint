const messageModel = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    const { conversation, message, picture } = req.body;
    const addMessage = new messageModel({
      sender: req.user._id,
      conversation,
      message,
      picture,
    });

    await addMessage.save();

    const populatedMessage = await addMessage.populate("sender");

    return res.status(201).json(populatedMessage);
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// get the message

exports.getMessage = async (req, res) => {
  try {
    const { conversationId } = req.params;
    const message = await messageModel
      .find({
        conversation: conversationId,
      })
      .populate("sender");
    return res.status(200).json({
      message: "Fetched Message Successfully",
      message,
    });
  } catch (err) {
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
