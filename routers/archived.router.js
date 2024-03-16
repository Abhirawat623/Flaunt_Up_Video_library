const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const archivedController = require("../controllers/archivedController");

const {addArchivedHandle,deleteArchivedHandle,getArchivedHandle} = archivedController;

const archivedRouter = express.Router();

//adding Archived
archivedRouter.route("/").post(verifyUSer,addArchivedHandle);

//deleting Archived

archivedRouter.route("/:videoId").delete(verifyUSer,deleteArchivedHandle);

//getting Archived

archivedRouter.route("/").get(verifyUSer,getArchivedHandle);

module.exports= archivedRouter;