const express = require('express');

const categoriesRouter = express.Router();

const categories = require('../db/videos');

categoriesRouter.route("/").
get((req,res)=>{
    res.json(categories)
});

module.exports = categoriesRouter;