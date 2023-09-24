const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
    categoryName:{type: String,required:true},
    description:{type: String,required:true},
   
});

const Categories = mongoose.model("Categories", categoriesSchema);

module.exports = Categories;