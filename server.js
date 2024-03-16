const express = require('express');
const app = express();
const PORT=3000;

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

const videoDbRouter = require('./routers/videoDataImport.router');

const categoriesRouter = require("./routers/categories.router");

const categoriesDbRouter = require('./routers/categoriesDataImport.router');

const singleVideoRouter = require('./routers/singleVideo.router');

const wishlistRouter= require('./routers/wishlist.router');

const historyRouter = require('./routers/history.router');

const archivedRouter= require('./routers/archived.router');

const playlistRouter = require("./routers/playlist.router");


app.get("/",(req,res)=>{
    res.send("hello all")
});

//videos
app.use('/api/videos',videoRouter);

app.use('/api/videosdata',videoDbRouter);

app.use("/api/videos",singleVideoRouter),

//categories

app.use('/api/categories',categoriesRouter);

app.use('/api/categoriesdata',categoriesDbRouter);

//auth
const { signUpRouter, logInRouter } = require("./routers/auth.router");

app.use("/api/auth", signUpRouter);

app.use("/api/auth", logInRouter);

//wishlist
app.use("/api/wishlist",wishlistRouter);

//history
app.use("/api/history",historyRouter);

//archived
app.use("/api/archived",archivedRouter)

//playlist
app.use("/api/playlist",playlistRouter)


mongoose.connection.once("open",()=>{
    console.log('connected to db');
    app.listen(process.env.PORT || PORT,()=>{
        console.log("server is comnected")
    })
})