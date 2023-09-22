const express = require('express');
const app = express();
const PORT=8080;
//mongoose
const mongoose = require('mongoose')
//dotenv
const dotenv = require("dotenv");
dotenv.config();
//cors
const cors = require('cors');
app.use(cors());
//db
const connectdb = require('./configuration/dbconfig');
connectdb();

app.use(express.json())

const videoRouter = require('./routers/video.router');

app.get("/",(req,res)=>{
    res.send("hey devs")
});

//videos
app.use('/api/videos',videoRouter)




mongoose.connection.once("open",()=>{
    console.log('connected to db');
    app.listen(process.env.PORT || PORT,()=>{
        console.log("server is comnected")
    })
})