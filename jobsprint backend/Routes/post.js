const express = require("express");
const router = express.Router();
const authentication = require('../Authentication/auth')

const postController = require('../controller/post')

router.post('/',authentication.auth,postController.addPost)
router.post('/likeDislike',authentication.auth,postController.likeDislike)
router.get('/getAllpost',postController.getAllpost)
router.get('/getPostById/:postId',postController.getPostByIdpostId)













module.exports = router;