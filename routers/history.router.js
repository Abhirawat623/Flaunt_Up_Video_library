const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const historyController = require("../controllers/historyController");

const {addHistoryHandle,deleteHistoryHandle,getHistoryHandle} = historyController;

const historyRouter = express.Router();

//adding wishlist
historyRouter.route("/").post(verifyUSer,addHistoryHandle);

//deleting wishlist

historyRouter.route("/:videoId").delete(verifyUSer,deleteHistoryHandle);

//getting wishlist

historyRouter.route("/").get(verifyUSer,getHistoryHandle);

module.exports= historyRouter;