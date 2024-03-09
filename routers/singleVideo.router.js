const express = require('express');
const singleVideoRouter = express.Router();

const singleVideoHandle = require("../controllers/singleVideoController");

singleVideoRouter.route("/:id")
    .get(singleVideoHandle)

module.exports = singleVideoRouter;