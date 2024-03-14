const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const archivedController = require("../controllers/archivedController");

const {addArchivedHandle,deleteArchivedHandle,getArchivedHandle} = archivedController;

const archivedRouter = express.Router();

//adding wishlist
archivedRouter.route("/").post(verifyUSer,addArchivedHandle);

//deleting wishlist

archivedRouter.route("/:videoId").delete(verifyUSer,deleteArchivedHandle);

//getting wishlist

archivedRouter.route("/").get(verifyUSer,getArchivedHandle);

module.exports= archivedRouter;