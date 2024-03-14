const mongoose= require("mongoose");

const historySchema = new mongoose.Schema({
    videoId :{type:String,required:true,unique:true},
    
},
{
    timestamps: true,
  });

  const History= mongoose.model("history",historySchema);

  module.exports= History;