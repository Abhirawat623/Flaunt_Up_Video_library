const mongoose = require("mongoose");

const archivedSchema = new mongoose.Schema({
    videoId:{type:String,required:true,unique:true},

},{
    timestamps: true
});

const Archived= mongoose.model("Archived",archivedSchema);

module.exports = Archived;