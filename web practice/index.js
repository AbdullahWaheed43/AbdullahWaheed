const express = require("express");
const mongoose= require("mongoose");
const userRouter = require("./routes/user-routes");

const app = express();
const port = 5000;


app.use('/',userRouter);
app.use("/", (req, res)=>{
    res.send(`hello there!!`)
})

mongoose.set('strictQuery',false).connect("mongodb://127.0.0.1:27017").then(()=>{
    console.log("connected to mongodb");
}).catch((error)=>{
    console.log(error);
})

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
})

