const express = require("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
require("./connection.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

io.on("connection", (socket) => {
  console.log("User Connected");

  socket.on("joinConversation", (conversationId) => {
    console.log(`User Joined Conversation ID of ${conversationId}`);
    socket.join(conversationId);
  });

  socket.on("sendMessage", (convID, messageDetail) => {
    console.log("Message Sent");
    io.to(convID).emit("receiveMessage", messageDetail);
  });
});

const UserRoute = require("./Routes/user.js");
const PortRoute = require("./Routes/post.js");
const NotificationRoute = require("./Routes/notification.js");
const CommentRoute = require("./Routes/comments.js");
const CoversationRoute = require("./Routes/conversation.js");
const MessageRoute = require("./Routes/message.js");

app.use(`/api/auth`, UserRoute);
app.use("/api/post", PortRoute);
app.use("/api/notification", NotificationRoute);
app.use("/api/comments", CommentRoute);
app.use("/api/conversation", CoversationRoute);
app.use("/api/message", MessageRoute);

server.listen(PORT, () => {
  console.log(`Backedn Server is running on port http://localhost:`, PORT);
});
