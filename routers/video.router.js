const express = require('express');

const videoRouter = express.Router();

const videos = require('../db/videos');

videoRouter.route("/").
get((req,res)=>{
    res.json(videos)
});

module.exports = videoRouter;