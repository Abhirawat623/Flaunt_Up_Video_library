const express = require('express');

const videos = require("../db/videos");

const Video = require("../model/video.model");

const videoDbRouter = express.Router();

videoDbRouter.route("/").
post( async(req,res)=>{
    try{
        const videoDb = await Video.insertMany(videos)
        res.json(videoDb)
    }
    catch(err){
        console.log(err);
        res.json({message:"Videos cant be added to MOngoDb"})
    }
})

module.exports = videoDbRouter;