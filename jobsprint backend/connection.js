// mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jobsprint").then(res=>{
    console.log("Database Started Successfully and connected with backend")
}).catch(err=>{
    console.log("Error is there")
})



// mongoose.connect("mongodb+srv://tyagiayush326_db_user:sS7w3vWeNDGaUh7j@cluster0.iytcwsq.mongodb.net/?appName=Cluster0").then(res=>{
//     console.log("Database Started Successfully")
// }).catch(err=>{
//     console.log("Error")
// })

