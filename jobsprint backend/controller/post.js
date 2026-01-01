const postModel = require("../models/post");
const { post } = require("../Routes/user");

// exporting the post controller

exports.addPost = async (req, res) => {
  try {
    const { desc, image_link } = req.body;
    let userId = req.user._id;

    const addPost = new postModel({ user: userId, desc, image_link });
    if (!addPost) {
      return res.status(400).json({ error: "Something went wrong " });
    }
    await addPost.save();
    return res.status(200).json({
      message: "Post has been done",
      post: addPost,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Like DisLike the post

exports.likeDislike = async (req, res) => {
  try {
    const selfId = req.user._id;
    const { postId } = req.body;
    const post = await postModel.findById(postId);

    if (!post) {
      return res.status(400).json({ error: "No such post found" });
    }
    const index = post.likes.findIndex((id) => id.equals(selfId));
    if (index !== -1) {
      post.likes.splice(index, 1); // Alread liked the post , remove like
    } else {
      post.likes.push(selfId); // add the like
    }

    await post.save();

    res.status(200).json({
      message: index !== -1 ? "Post Uniked" : "Post Liked",
      likes: post.likes,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Get all the posts

exports.getAllpost = async (req, res) => {
  try {
    const posts = await postModel
      .find()
      .sort({ createdAt: -1 })
      .populate("user", "-password");

    res.status(200).json({
      message: "All Posts are showing",
      posts: posts,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};

// Get post id by post id

exports.getPostByIdpostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await postModel.findById(postId).populate('user', '-password');
    if (!post){
        return res.status(400).json({
            error:"No such Post Found"
        })
    }
    // await post.save();
    res.status(200).json({
      message: "Post Found",
      post: post,
    });
     
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error", message: err.message });
  }
};
