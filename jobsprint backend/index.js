const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = 3000

require("./connection.js")

app.get("/", (req,res)=>{
   res.send({
    message: "Congrats you have created this API "
   })
})

app.listen(port,()=>{
    console.log(`Example app listening on port http://localhost:${port}`)
})