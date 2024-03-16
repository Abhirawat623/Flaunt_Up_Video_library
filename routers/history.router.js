const express = require("express");

const verifyUSer= require("../middleware/verifyUser");

const historyController = require("../controllers/historyController");

const {addHistoryHandle,deleteHistoryHandle,getHistoryHandle} = historyController;

const historyRouter = express.Router();

//adding History
historyRouter.route("/").post(verifyUSer,addHistoryHandle);

//deleting History

historyRouter.route("/:videoId").delete(verifyUSer,deleteHistoryHandle);

//getting History

historyRouter.route("/").get(verifyUSer,getHistoryHandle);

module.exports= historyRouter;