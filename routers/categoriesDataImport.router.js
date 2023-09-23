const express = require('express');

const categories = require("../db/categories");

const Categories = require("../model/categories.model");

const categoriesDbRouter = express.Router();

categoriesDbRouter.route("/").
post( async(req,res)=>{
    try{
        const categoriesDb = await Categories.insertMany(categories)
        res.json(categoriesDb)
    }
    catch(err){
        console.log(err);
        res.json({message:"Categories cant be added to MOngoDb"})
    }
})

module.exports = categoriesDbRouter;