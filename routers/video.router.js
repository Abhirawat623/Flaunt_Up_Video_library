const express = require('express');

const videoRouter = express.Router();


const videoHandle = require("../controllers/videoController");

videoRouter.route("/").
get(videoHandle);

module.exports = videoRouter;