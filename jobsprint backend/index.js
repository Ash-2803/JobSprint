const express = require("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

require("./connection.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const UserRoute = require("./Routes/user.js");
const PortRoute = require("./Routes/post.js");
const NotificationRoute = require("./Routes/notification.js");
const CommentRoute = require("./Routes/comments.js");
const CoversationRoutes = require('./Routes/conversation.js')

app.use(`/api/auth`, UserRoute);
app.use("/api/post", PortRoute);
app.use("/api/notification", NotificationRoute);
app.use("/api/comments", CommentRoute);
app.use("/api/conversation", CoversationRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:`, PORT);
});
