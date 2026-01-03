const express = require("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

const cors = require('cors')

require("./connection.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  credentials : true,
  origin : "http://localhost:5173"
}))

const UserRoute = require("./Routes/user.js");
const PortRoute = require("./Routes/post.js");
const NotificationRoute = require("./Routes/notification.js");
const CommentRoute = require("./Routes/comments.js");
const CoversationRoute = require('./Routes/conversation.js')
const MessageRoute = require('./Routes/message.js')

app.use(`/api/auth`, UserRoute);
app.use("/api/post", PortRoute);
app.use("/api/notification", NotificationRoute);
app.use("/api/comments", CommentRoute);
app.use("/api/conversation", CoversationRoute);
app.use("/api/message", MessageRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:`, PORT);
});
