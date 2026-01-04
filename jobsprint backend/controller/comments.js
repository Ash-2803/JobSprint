const commentModel = require("../models/comments");
const postModel = require("../models/post");
const notificationModel = require("../models/notification");

// post the comment

exports.commentPost = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const userId = req.user._id;
    const postExist = await postModel.findById(postId).populate("user");
    if (!postExist) {
      return res.status(400).json({ error: "No such post found" });
    }
    postExist.comments = postExist.comments + 1;
    await postExist.save();

    const newComment = new commentModel({
      user: userId,
      post: postId,
      comment,
    });
    await newComment.save();

    const populatedComment = await commentModel
      .findById(newComment._id)
      .populate("user", "userName headline profilePic");

    const content = `${req.user.userName} has commented on your post`;

    const notification = new notificationModel({
      sender: userId,
      receiver: postExist.user._id,
      content,
      type: "comment",
      postId: postId.toString(),
    });

    await notification.save();
    console.log("Notification saved successfully!");
    return res.status(200).json({
      message: "Commented Successfully",
      comment: populatedComment,
    });
  } catch (err) {
    console.log("Notification failed:", error.message);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Get comment by Post ID

exports.getCommentByPostId = async (req, res) => {
  try {
    const {postId} = req.params;
    const postExist = await postModel.findById(postId);
    if (!postExist){
        return res.status(400).json({error : "No such Post found"})
    }
    const comments = await commentModel.find({post : postId}).sort({createdAt : -1}).populate('user','userName headline profilePic')
    return res.status(200).json({
      message: "Comment fetched",
      comments: comments,
    });

  } catch (err) {
    console.log("Notification failed:", error.message);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
