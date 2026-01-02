const notificationModel = require("../models/notification");
const { notification } = require("../Routes/notification");

// Get the Notifications

exports.getNotification = async (req, res) => {
  try {
    const selfId = req.user._id;
    const notifications = await notificationModel
      .find({ receiver: selfId })
      .sort({ createdAt: -1 })
      .populate("sender", "reciever");
    return res.status(200).json({
      message: "Notification Fetched Successfully",
      notifications: notifications,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Update updateIsRead

exports.updateIsRead = async (req, res) => {
  try {
    const { notificationId } = req.body;
    const notification = await notificationModel.findByIdAndUpdate({
      isRead: true,
    });
    if (!notification) {
      return res.status(404).json({ error: "Notification not found" });
    }
    return res.status(200).json({
      message: "Notification Read Successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Notification Read or not

exports.activeNotify = async(req,res)=>{
    try{
      const selfId = req.user._id;
      const notification = await notificationModel.find({receiver : selfId,isRead : false})

      return res.status(200).json({
      message: "Notification Read Successfully",
      count : notification.length
    });

    }catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
}