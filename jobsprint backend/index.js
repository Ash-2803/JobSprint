const express = require("express");
// const { default: mongoose } = require("mongoose");
const app = express();
const cookieParser = require("cookie-parser");

require("./connection.js");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const UserRoute = require('./Routes/user.js')

app.use(`/api/auth`,UserRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:`, PORT);
});
