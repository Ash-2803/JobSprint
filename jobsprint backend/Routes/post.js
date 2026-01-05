const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const postController = require('../controller/post')

router.post('/',authentication.auth,postController.addPost)
router.post('/likeDislike',authentication.auth,postController.likeDislike)
router.get('/getAllpost',postController.getAllpost)
router.get('/getTop5Post/:userId',postController.getTop5PostForUser)
router.get('/getAllPostForUser/:userId',postController.getAllPostForUser)
router.get('/getPostById/:postId',postController.getPostByIdpostId)


module.exports = router;