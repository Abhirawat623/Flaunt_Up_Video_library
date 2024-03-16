const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const playlistController = require("../controllers/playlistController");

const {addPlaylistHandle,deletePlaylistHandle,getPlaylistHandle} = playlistController;

const playlistRouter = express.Router();

//adding Playlist
playlistRouter.route("/").post(verifyUSer,addPlaylistHandle);

//deleting Playlist

playlistRouter.route("/:videoId").delete(verifyUSer,deletePlaylistHandle);

//getting Playlist

playlistRouter.route("/").get(verifyUSer,getPlaylistHandle);

module.exports= playlistRouter;